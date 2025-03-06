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
  