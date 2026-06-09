# FAQ

## Che cosa fa questo progetto?

Raccoglie alcune indicazioni sul tempo per Firenze, Roma, Milano, Parigi e Tokyo. Non è un portale professionale: è un esercizio pratico per mettere insieme HTML, CSS, Bootstrap, JavaScript e una fonte esterna.

## Serve un account su Open-Meteo?

No. Open-Meteo accetta richieste libere, quindi il progetto può interrogare l'endpoint direttamente dal browser.

## Perché ci sono immagini delle città?

Per rendere la home meno fredda. Una foto aiuta a riconoscere subito il luogo e spezza la parte più tecnica fatta di coordinate e numeri.

## Cosa appare se la chiamata fallisce?

Compare un avviso nella sezione interessata. Il layout non sparisce; semplicemente non arrivano le misurazioni finché la richiesta non torna a buon fine.

## Come aggiungo un'altra località?

Apri `script.js`, vai nell'array `CITIES` e inserisci un nuovo oggetto con nome, latitudine e longitudine. Dopo quel passaggio, la funzione che costruisce l'URL userà anche la nuova voce.

## Per quale motivo le previsioni partono da Firenze?

Perché Firenze è il primo elemento dell'elenco. È una scelta semplice per l'esercizio; in futuro si potrebbe aggiungere un menu e lasciare all'utente la selezione.

## Si legge bene anche da smartphone?

Sì. Bootstrap gestisce buona parte della griglia e il CSS aggiunge qualche accorgimento per rendere schede, testi e spazi più comodi sugli schermi piccoli.
