# FAQ

## A cosa serve questa dashboard?

Serve a visualizzare in modo semplice alcune informazioni meteo per Firenze, Roma, Milano, Parigi e Tokyo. Non vuole sostituire un portale professionale: e un esercizio pratico per usare HTML, CSS, Bootstrap, JavaScript e una API esterna.

## Devo registrarmi a Open-Meteo?

No. Open-Meteo permette di fare richieste senza chiave API, quindi il progetto puo funzionare direttamente dal browser.

## Perche alcune immagini arrivano da internet?

Per rendere la homepage piu piacevole e riconoscibile. Le immagini aiutano a capire subito di quale citta si sta parlando, invece di avere solo una lista di nomi e numeri.

## Cosa succede se l'API non risponde?

Lo script mostra un messaggio di errore nella pagina. In pratica il sito resta aperto, ma i dati meteo non vengono caricati finche la chiamata non torna disponibile.

## Posso aggiungere altre citta?

Si. Bisogna inserire nome, latitudine e longitudine nell'array `CITIES` dentro `script.js`. Dopo questo, lo script puo costruire l'URL e recuperare i dati anche per la nuova localita.

## Perche nella pagina previsioni parte Firenze?

Nel codice la funzione delle previsioni usa come scelta iniziale la prima citta dell'elenco, cioe Firenze. E una base semplice, ma si puo migliorare aggiungendo un menu per scegliere la citta.

## Il sito funziona su telefono?

Si, la struttura usa Bootstrap e alcune regole CSS responsive. Le card e le sezioni si adattano allo schermo, cosi la lettura resta comoda anche su mobile.
