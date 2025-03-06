const fs = require('fs');

// Carica i dati giornalieri dal file JSON
fs.readFile('dati_giornalieri.json', 'utf8', (err, data) => {
  if (err) {
    console.error("Errore nel leggere il file:", err);
    return;
  }

  const giornalieri = JSON.parse(data).giornalieri;

  // Funzione per calcolare la media dei dati in un intervallo (settimanale o mensile)
  function calcolaMediaPeriodo(dati, tipoPeriodo) {
    // Ordina i dati per giorno
    dati.sort((a, b) => new Date(a.giorno) - new Date(b.giorno));

    let periodi = [];
    let periodoCorrente = [];
    let inizioPeriodo = new Date(dati[0].giorno);

    dati.forEach(giorno => {
      const dataGiorno = new Date(giorno.giorno);

      if (tipoPeriodo === 'settimanale') {
        // Se il giorno corrente non è nello stesso intervallo settimanale, inizia una nuova settimana
        if (Math.floor((dataGiorno - inizioPeriodo) / (1000 * 60 * 60 * 24)) >= 7) {
          periodi.push(periodoCorrente);
          periodoCorrente = [giorno];
          inizioPeriodo = dataGiorno;
        } else {
          periodoCorrente.push(giorno);
        }
      } else if (tipoPeriodo === 'mensile') {
        // Se il mese corrente non è lo stesso del mese del giorno, inizia un nuovo mese
        if (dataGiorno.getMonth() !== inizioPeriodo.getMonth()) {
          periodi.push(periodoCorrente);
          periodoCorrente = [giorno];
          inizioPeriodo = dataGiorno;
        } else {
          periodoCorrente.push(giorno);
        }
      }
    });

    // Aggiungi l'ultimo periodo
    if (periodoCorrente.length > 0) {
      periodi.push(periodoCorrente);
    }

    // Calcola le medie per ogni periodo
    let periodiMedia = periodi.map(periodo => {
      let mediaPeriodo = {
        giorno_inizio: periodo[0].giorno,
        passi: periodo.reduce((sum, g) => sum + g.passi, 0) / periodo.length,
        frequenza_cardiaca: periodo.reduce((sum, g) => sum + g.frequenza_cardiaca, 0) / periodo.length,
        frequenza_respiratoria: periodo.reduce((sum, g) => sum + g.frequenza_respiratoria, 0) / periodo.length,
        temperatura: periodo.reduce((sum, g) => sum + g.temperatura, 0) / periodo.length,
        spO2: periodo.reduce((sum, g) => sum + g.spO2, 0) / periodo.length,
        ore_sonno: periodo.reduce((sum, g) => sum + g.ore_sonno, 0) / periodo.length,
        qualita_sonno: periodo.reduce((sum, g) => sum + g.qualita_sonno, 0) / periodo.length,
      };
      return mediaPeriodo;
    });

    return periodiMedia;
  }

  // Calcola i dati settimanali e mensili
  const settimanali = calcolaMediaPeriodo(giornalieri, 'settimanale');
  const mensili = calcolaMediaPeriodo(giornalieri, 'mensile');

  // Salva i dati aggregati in un nuovo file JSON
  const outputData = {
    settimanali: settimanali,
    mensili: mensili
  };

  fs.writeFile('dati_aggregati.json', JSON.stringify(outputData, null, 4), 'utf8', (err) => {
    if (err) {
      console.error("Errore nel salvare il file:", err);
    } else {
      console.log("File 'dati_aggregati.json' creato con successo.");
    }
  });
});
