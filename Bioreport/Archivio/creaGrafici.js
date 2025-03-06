// Carica il file JSON e crea i grafici
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

        // Grafico Passi
        var graficoPassi = echarts.init(document.getElementById('graficoPassi'));
        var optionPassi = {
          title: { text: 'Numero di Passi Giornalieri' },
          tooltip: { trigger: 'axis' },
          xAxis: { type: 'category', data: giorni },
          yAxis: { type: 'value' },
          series: [{ data: passi, type: 'bar' }]
        };
        graficoPassi.setOption(optionPassi);

        // Grafico Frequenza Cardiaca
        var graficoFrequenzaCardiaca = echarts.init(document.getElementById('graficoFrequenzaCardiaca'));
        var optionFrequenzaCardiaca = {
          title: { text: 'Frequenza Cardiaca Media' },
          tooltip: { trigger: 'axis' },
          xAxis: { type: 'category', data: giorni },
          yAxis: { type: 'value' },
          series: [{ data: frequenzaCardiaca, type: 'bar' }]
        };
        graficoFrequenzaCardiaca.setOption(optionFrequenzaCardiaca);

        // Grafico Frequenza Respiratoria
        var graficoFrequenzaRespiratoria = echarts.init(document.getElementById('graficoFrequenzaRespiratoria'));
        var optionFrequenzaRespiratoria = {
          title: { text: 'Frequenza Respiratoria Media' },
          tooltip: { trigger: 'axis' },
          xAxis: { type: 'category', data: giorni },
          yAxis: { type: 'value' },
          series: [{ data: frequenzaRespiratoria, type: 'bar' }]
        };
        graficoFrequenzaRespiratoria.setOption(optionFrequenzaRespiratoria);

        // Grafico Temperatura Corporea
        var graficoTemperatura = echarts.init(document.getElementById('graficoTemperatura'));
        var optionTemperatura = {
          title: { text: 'Temperatura Corporea Media' },
          tooltip: { trigger: 'axis' },
          xAxis: { type: 'category', data: giorni },
          yAxis: { type: 'value' },
          series: [{ data: temperatura, type: 'bar' }]
        };
        graficoTemperatura.setOption(optionTemperatura);

        // Grafico SpO2
        var graficoSpO2 = echarts.init(document.getElementById('graficoSpO2'));
        var optionSpO2 = {
          title: { text: 'Livelli di SpO2' },
          tooltip: { trigger: 'axis' },
          xAxis: { type: 'category', data: giorni },
          yAxis: { type: 'value' },
          series: [{ data: spO2, type: 'bar' }]
        };
        graficoSpO2.setOption(optionSpO2);

        // Grafico Ore di Sonno
        var graficoOreSonno = echarts.init(document.getElementById('graficoOreSonno'));
        var optionOreSonno = {
          title: { text: 'Ore di Sonno' },
          tooltip: { trigger: 'axis' },
          xAxis: { type: 'category', data: giorni },
          yAxis: { type: 'value' },
          series: [{ data: oreSonno, type: 'bar' }]
        };
        graficoOreSonno.setOption(optionOreSonno);

        // Grafico Qualità del Sonno
        var graficoQualitaSonno = echarts.init(document.getElementById('graficoQualitaSonno'));
        var optionQualitaSonno = {
          title: { text: 'Qualità del Sonno (%)' },
          tooltip: { trigger: 'axis' },
          xAxis: { type: 'category', data: giorni },
          yAxis: { type: 'value' },
          series: [{ data: qualitaSonno, type: 'bar' }]
        };
        graficoQualitaSonno.setOption(optionQualitaSonno);
      })
      .catch(error => console.error('Errore nel caricamento del file JSON:', error));
