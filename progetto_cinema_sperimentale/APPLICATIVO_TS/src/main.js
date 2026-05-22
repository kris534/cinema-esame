const MAX_BIGLIETTI = 6;
const SPETTACOLI_DISPONIBILI = ["18:00", "20:30", "22:45"];

function validaPrenotazione(p) {
  if (!p.nome || p.nome.trim().length < 2) return { ok: false, errore: "Inserire un nome valido." };
  if (p.biglietti > MAX_BIGLIETTI) return { ok: false, errore: "Numero massimo di biglietti superato" };
  if (p.biglietti < 1) return { ok: false, errore: "Inserire almeno 1 biglietto." };
  if (!SPETTACOLI_DISPONIBILI.includes(p.orario)) return { ok: false, errore: "Spettacolo non disponibile" };
  return { ok: true, messaggio: "Prenotazione confermata per " + p.nome + ": " + p.biglietti + " biglietto/i alle " + p.orario + "." };
}

const form = document.getElementById("form");
const esito = document.getElementById("esito");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const nome = document.getElementById("nome").value;
  const biglietti = Number(document.getElementById("biglietti").value);
  const orario = document.getElementById("orario").value.trim();
  const r = validaPrenotazione({ nome, biglietti, orario });
  if (r.ok) { esito.className = "ok"; esito.textContent = r.messaggio; }
  else { esito.className = "err"; esito.textContent = r.errore; }
});
