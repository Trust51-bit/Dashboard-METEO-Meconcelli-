# Dashboard Meteo Meconcelli

Questo lavoro è un piccolo sito multipagina pensato per leggere il tempo in modo rapido. Apri la home, scegli la sezione giusta e trovi subito ciò che serve, senza girare tra schermate inutili.

La parte interessante è che le misurazioni non sono scritte a mano. Arrivano da Open-Meteo, un servizio gratuito che risponde direttamente dal browser e non chiede nessuna chiave personale.

## Cosa trovi dentro

- Una home con presentazione, sorgente dei dati e card dedicate alle località scelte.
- Una schermata live con gradi, aria e condizione del cielo.
- Un riepilogo ordinato con minime e massime giornaliere.
- Un foglio `style.css` per dare al sito un aspetto più curato rispetto al Bootstrap base.
- Tre documenti nella cartella `DOCS`, utili per spiegare installazione, API e dubbi frequenti.

## Località seguite

| Nome | Latitudine | Longitudine |
| --- | ---: | ---: |
| Firenze | 43.7696 | 11.2558 |
| Roma | 41.9028 | 12.4964 |
| Milano | 45.4642 | 9.1900 |
| Parigi | 48.8566 | 2.3522 |
| Tokyo | 35.6762 | 139.6503 |

## Strumenti usati

- HTML per costruire la struttura.
- CSS per colori, spaziature, card e dettagli visivi.
- Bootstrap per griglia, navbar, alert e tabella.
- JavaScript per preparare gli URL, chiamare la API e inserire i risultati.
- Open-Meteo Forecast API come fonte delle misurazioni.

## API di riferimento

Endpoint principale:

```text
https://api.open-meteo.com/v1/forecast
```

Nel codice vengono richiesti gradi, velocità dell'aria, codice del cielo e estremi giornalieri. La spiegazione più tecnica sta in `DOCS/api.md`.

## Cartelle e file

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

Realizzato da Simone Fanelli per esercitarsi con sito multipagina, Bootstrap, JavaScript, chiamate API e documentazione del progetto.
