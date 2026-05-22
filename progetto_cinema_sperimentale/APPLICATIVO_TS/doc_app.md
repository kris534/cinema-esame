# Documento Architetturale dell'Applicativo — Prenotazione LUMEN

## Scopo
Permettere al cliente di prenotare biglietti per uno spettacolo, applicando
i controlli di validità sul numero di biglietti e sull'orario scelto.

## Input
- nome cliente (string)
- numero biglietti (number)
- orario spettacolo (string)

## Output
- Messaggio di conferma, oppure
- Messaggio di errore specifico

## Diagramma di flusso

```
        ┌──────────────────────┐
        │ INIZIO               │
        └──────────┬───────────┘
                   ▼
        ┌──────────────────────┐
        │ Inserisci nome,      │
        │ biglietti, orario    │
        └──────────┬───────────┘
                   ▼
        ┌──────────────────────┐
        │ biglietti > 6 ?      │──SI──► "Numero massimo
        └──────────┬───────────┘         di biglietti superato"
                   │NO
                   ▼
        ┌──────────────────────┐
        │ orario in elenco ?   │──NO──► "Spettacolo
        └──────────┬───────────┘         non disponibile"
                   │SI
                   ▼
        ┌──────────────────────┐
        │ Mostra conferma      │
        └──────────┬───────────┘
                   ▼
                ( FINE )
```

## Costanti
- `MAX_BIGLIETTI = 6`
- `SPETTACOLI_DISPONIBILI = ["18:00", "20:30", "22:45"]`

## Funzione principale
`validaPrenotazione(p: Prenotazione): Esito`
