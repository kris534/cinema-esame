// ===========================================================
// Applicativo di prenotazione — Cinema Sperimentale LUMEN
// Logica TypeScript con i controlli richiesti dal progetto.
// ===========================================================

const MAX_BIGLIETTI = 6;
const SPETTACOLI_DISPONIBILI: string[] = ["18:00", "20:30", "22:45"];

interface Prenotazione {
  nome: string;
  biglietti: number;
  orario: string;
}

type Esito =
  | { ok: true; messaggio: string }
  | { ok: false; errore: string };

function validaPrenotazione(p: Prenotazione): Esito {
  // 1) controllo nome
  if (!p.nome || p.nome.trim().length < 2) {
    return { ok: false, errore: "Inserire un nome valido." };
  }
  // 2) controllo numero massimo biglietti
  if (p.biglietti > MAX_BIGLIETTI) {
    return { ok: false, errore: "Numero massimo di biglietti superato" };
  }
  if (p.biglietti < 1) {
    return { ok: false, errore: "Inserire almeno 1 biglietto." };
  }
  // 3) controllo orario disponibile
  if (!SPETTACOLI_DISPONIBILI.includes(p.orario)) {
    return { ok: false, errore: "Spettacolo non disponibile" };
  }
  return {
    ok: true,
    messaggio:
      "Prenotazione confermata per " + p.nome +
      ": " + p.biglietti + " biglietto/i alle " + p.orario + ".",
  };
}

// ---- Collegamento alla UI HTML ----
const form = document.getElementById("form") as HTMLFormElement;
const esito = document.getElementById("esito") as HTMLDivElement;

form.addEventListener("submit", (e: Event) => {
  e.preventDefault();
  const nome = (document.getElementById("nome") as HTMLInputElement).value;
  const biglietti = Number((document.getElementById("biglietti") as HTMLInputElement).value);
  const orario = (document.getElementById("orario") as HTMLInputElement).value.trim();

  const r = validaPrenotazione({ nome, biglietti, orario });

  if (r.ok) {
    esito.className = "ok";
    esito.textContent = r.messaggio;
  } else {
    esito.className = "err";
    esito.textContent = r.errore;
  }
});
