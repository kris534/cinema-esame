# Documento Architetturale del Sito — LUMEN

## Alberatura

```
index.html (Home)
├── programmazione.html
├── info.html
├── contatti.html
└── prenotazione.html  ──link──►  APPLICATIVO_TS
```

## Programma / mappa di navigazione

| Pagina             | Contenuto principale                       | Link in uscita                  |
|--------------------|--------------------------------------------|---------------------------------|
| index.html         | Hero + presentazione cinema                | prenotazione, programmazione    |
| programmazione.html| Elenco film con orari                      | prenotazione                    |
| info.html          | Storia, sala, indirizzo                    | —                               |
| contatti.html      | Recapiti + form contatti                   | —                               |
| prenotazione.html  | Istruzioni + bottone all'applicativo       | APPLICATIVO_TS/src/index.html   |

## Tecnologie
HTML5, CSS3 (file unico `style.css`), nessun framework.
