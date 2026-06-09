# API

Il progetto usa la Forecast API di Open-Meteo. E comoda per questo esercizio perche restituisce dati meteo in formato JSON e non obbliga a creare un account.

## Endpoint usato

```text
https://api.open-meteo.com/v1/forecast
```

Lo script costruisce l'indirizzo completo partendo da questo endpoint e aggiungendo i parametri necessari.

## Parametri principali

| Parametro | A cosa serve |
| --- | --- |
| `latitude` | Indica la latitudine della citta. |
| `longitude` | Indica la longitudine della citta. |
| `current=temperature_2m,wind_speed_10m,weather_code` | Richiede temperatura attuale, velocita del vento e codice meteo. |
| `daily=temperature_2m_max,temperature_2m_min` | Richiede massima e minima giornaliera. |
| `timezone=auto` | Usa automaticamente il fuso orario della localita scelta. |

## Campi JSON letti dal sito

| Campo | Dove viene mostrato |
| --- | --- |
| `current.temperature_2m` | Nelle card del meteo attuale. |
| `current.wind_speed_10m` | Nella pagina `meteo.html`, accanto alla temperatura. |
| `current.weather_code` | Viene trasformato in una frase leggibile, per esempio "Cielo sereno" o "Coperto". |
| `daily.time` | Nella tabella delle previsioni. |
| `daily.temperature_2m_min` | Colonna della temperatura minima. |
| `daily.temperature_2m_max` | Colonna della temperatura massima. |

## Esempio di richiesta

Questa e una richiesta per Firenze:

```text
https://api.open-meteo.com/v1/forecast?latitude=43.7696&longitude=11.2558&current=temperature_2m,wind_speed_10m,weather_code&daily=temperature_2m_max,temperature_2m_min&timezone=auto
```

La risposta contiene piu dati di quelli che si vedono nella pagina. Nel progetto vengono presi solo quelli utili per restare chiari: temperatura, vento, condizione meteo e previsioni minime/massime.
