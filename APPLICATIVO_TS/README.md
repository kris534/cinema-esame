# Applicativo Prenotazione — TypeScript

Modulo di prenotazione collegato al sito LUMEN.

## File
- `src/index.html` — interfaccia del form
- `src/main.ts` — logica TypeScript con i controlli
- `src/main.js` — versione compilata (per esecuzione diretta in browser)

## Controlli implementati
1. Numero biglietti > 6 → "Numero massimo di biglietti superato"
2. Orario non in {18:00, 20:30, 22:45} → "Spettacolo non disponibile"
3. Nome obbligatorio (almeno 2 caratteri)

## Compilazione
```bash
tsc src/main.ts --target ES2020
```

## Documentazione
- `doc_app.pdf` — documento architetturale dell'applicativo
- `diagramma_flusso.png` — diagramma di flusso della logica
