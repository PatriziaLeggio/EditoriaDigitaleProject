let dati = {};

// Carica i dati dal file JSON
fetch('dati_smartwatch.json')
  .then(response => response.json())
  .then(data => {
    const giorni = data.dati.giorni;
    const passi = data.dati.passi;
    const frequenzaCardiaca = data.dati.frequenza_cardiaca;
    const frequenzaRespiratoria = data.dati.frequenza_respiratoria;
    const temperatura = data.dati.temperatura;
    const spO2 = data.dati.spO2;
    const oreSonno = data.dati.sonno.ore;
    const qualitaSonno = data.dati.sonno.qualita;
  .then(data => {
    dati = data;
    updateCharts(); // Carica i grafici con i dati iniziali
  })
  .catch(error => console.error('Errore nel caricamento dei dati:', error));


  function updateCharts() {
    var periodo = document.getElementById('periodo').value;
    var dati;
  
    // Seleziona i dati in base al periodo scelto
    if (periodo === 'giornaliero') {
      dati = datiGiornalieri;
    } else if (periodo === 'settimanale') {
      dati = datiSettimanali;
    } else {
      dati = datiMensili;
    }
  
    // Aggiorna il grafico dei passi
    graficoPassi.setOption({
      xAxis: { data: dati.giorni },
      series: [{ data: dati.passi }]
    });
  
    // Aggiorna gli altri grafici in modo simile
    graficoFrequenzaCardiaca.setOption({
      xAxis: { data: dati.giorni },
      series: [{ data: dati.frequenza_cardiaca }]
    });
  
    graficoSpO2.setOption({
      xAxis: { data: dati.giorni },
      series: [{ data: dati.spO2 }]
    });
  
    graficoTemperatura.setOption({
      xAxis: { data: dati.giorni },
      series: [{ data: dati.temperatura }]
    });
  
    graficoOreSonno.setOption({
      xAxis: { data: dati.giorni },
      series: [{ data: dati.ore_sonno }]
    });
  
    graficoQualitaSonno.setOption({
      xAxis: { data: dati.giorni },
      series: [{ data: dati.qualita_sonno }]
    });
  }
  
  // Inizializza i grafici all'avvio
  updateCharts();
  