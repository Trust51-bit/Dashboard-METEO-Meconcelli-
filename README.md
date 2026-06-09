# Dashboard Meteo Meconcelli

Questo progetto e un piccolo sito multipagina dedicato al meteo. L'idea e semplice: apri la pagina, scegli dove guardare e trovi subito le informazioni principali senza dover saltare da un sito all'altro.

La dashboard usa i dati di Open-Meteo, quindi non serve una chiave API. Basta una connessione internet e il browser fa il resto.

## Cosa contiene il sito

- Una homepage con presentazione del progetto, API usata e citta disponibili.
- Una pagina per il meteo attuale, caricata automaticamente con JavaScript.
- Una pagina per le previsioni giornaliere.
- Uno stile personalizzato in `style.css`, costruito sopra Bootstrap.
- Una piccola documentazione nella cartella `DOCS`.

## Citta considerate

| Citta | Latitudine | Longitudine |
| --- | ---: | ---: |
| Firenze | 43.7696 | 11.2558 |
| Roma | 41.9028 | 12.4964 |
| Milano | 45.4642 | 9.1900 |
| Parigi | 48.8566 | 2.3522 |
| Tokyo | 35.6762 | 139.6503 |

## Tecnologie usate

- HTML per la struttura delle pagine.
- CSS per rendere il sito piu curato e leggibile.
- Bootstrap per navbar, griglie, card, alert e tabelle.
- JavaScript per chiamare l'API e inserire i dati nella pagina.
- Open-Meteo Forecast API per meteo attuale e previsioni.

## API

Endpoint principale:

```text
https://api.open-meteo.com/v1/forecast
```

Nel progetto vengono richiesti temperatura, vento, codice meteo e temperature minime/massime giornaliere. I dettagli sono spiegati meglio in `DOCS/api.md`.

## Struttura del progetto

```text
Dashboard-METEO-Meconcelli-/
├── README.md
├── index.html
├── meteo.html
├── previsioni.html
├── style.css
├── script.js
├── DOCS/
│   ├── installazione.md
│   ├── faq.md
│   └── api.md
└── assets/
    └── immagini/
```

## Autore

Realizzato da Simone Fanelli come esercizio su sito multipagina, API esterna e documentazione del progetto.
