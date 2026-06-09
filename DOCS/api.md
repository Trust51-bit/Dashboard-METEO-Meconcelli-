# API

La sorgente scelta è la Forecast API di Open-Meteo. Va bene per un esercizio scolastico o dimostrativo perché restituisce JSON chiaro e non richiede registrazione.

## Indirizzo base

```text
https://api.open-meteo.com/v1/forecast
```

Lo script parte da questo indirizzo e aggiunge i parametri nella stringa dell'URL, in modo semplice e leggibile.

## Parametri usati

| Parametro | Significato |
| --- | --- |
| `latitude` | Posizione nord-sud della località. |
| `longitude` | Posizione est-ovest del punto scelto. |
| `current=temperature_2m,wind_speed_10m,weather_code` | Chiede gradi correnti, vento e codice descrittivo. |
| `daily=temperature_2m_max,temperature_2m_min` | Recupera massima e minima per i giorni disponibili. |
| `timezone=auto` | Lascia alla API il compito di scegliere il fuso orario corretto. |

## Campi letti dal codice

| Campo JSON | Uso nella pagina |
| --- | --- |
| `current.temperature_2m` | Numero principale nelle card live. |
| `current.wind_speed_10m` | Riga dedicata alla velocità dell'aria. |
| `current.weather_code` | Numero convertito in una frase comprensibile. |
| `daily.time` | Prima colonna della tabella. |
| `daily.temperature_2m_min` | Colonna con la minima prevista. |
| `daily.temperature_2m_max` | Colonna con il valore più alto della giornata. |

## Esempio pratico

Richiesta per Firenze:

```text
https://api.open-meteo.com/v1/forecast?latitude=43.7696&longitude=11.2558&current=temperature_2m,wind_speed_10m,weather_code&daily=temperature_2m_max,temperature_2m_min&timezone=auto
```

La risposta contiene più informazioni di quelle mostrate. In questo sito vengono prese solo le parti davvero utili, così la pagina resta chiara e non diventa un elenco infinito di numeri.
