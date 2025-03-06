// Funzione per popolare l'interpretazione sotto ogni grafico
function popolaInterpretazione(dati, vista) {
    const interpretazionePassi = document.getElementById("interpretazionePassi");
    let mediaPassi;

    if (vista === "settimanale") {
    // Media settimanale
    const datiSettimanale = calcolaMediaSettimanale(dati); // Ottieni i dati settimanali
    mediaPassi = datiSettimanale.map(d => d.passi).reduce((a, b) => a + b, 0) / datiSettimanale.length;
    mediaPassi = mediaPassi.toFixed(2);
    interpretazionePassi.innerHTML = `<h3>Passi - Media Settimanale</h3><p>Media passi settimanali: ${mediaPassi}</p>`;
    if (mediaPassi < 7000) {
        interpretazionePassi.innerHTML += `<p><strong>Suggerimento:</strong> Aumentare i passi settimanali. Cerca di raggiungere almeno 7.000 passi settimanali per migliorare la salute cardiovascolare.</p>`;
    }

    } else if (vista === "mensile") {
   // Media mensile
    const datiMensile = calcolaMediaMensile(dati); // Ottieni i dati mensili
    mediaPassi = datiMensile.map(d => d.passi).reduce((a, b) => a + b, 0) / datiMensile.length;
    mediaPassi = mediaPassi.toFixed(2);
    interpretazionePassi.innerHTML = `<h3>Passi - Media Mensile</h3><p>Media passi mensili: ${mediaPassi}</p>`;
    if (mediaPassi < 7000) {
        interpretazionePassi.innerHTML += `<p><strong>Suggerimento:</strong> Aumentare i passi mensili. Cerca di raggiungere almeno 7.000 passi al mese per migliorare la salute cardiovascolare.</p>`;
    }

    } else {
    // Media giornaliera (se la vista non è né settimanale né mensile)
    mediaPassi = dati.map(d => d.passi).reduce((a, b) => a + b, 0) / dati.length;
    mediaPassi = mediaPassi.toFixed(2);
    interpretazionePassi.innerHTML = `<h3>Passi - Media Giornaliera</h3><p>Media passi giornalieri: ${mediaPassi}</p>`;
    if (mediaPassi < 7000) {
       interpretazionePassi.innerHTML += `<p><strong>Suggerimento:</strong> Aumentare i passi giornalieri. Cerca di raggiungere almeno 7.000 passi al giorno per migliorare la salute cardiovascolare.</p>`;
     }
    }

    // Frequenza cardiaca
    const frequenzaCardiaca = dati.map(d => d.frequenza_cardiaca);
    const mediaFrequenzaCardiaca = frequenzaCardiaca.reduce((a, b) => a + b, 0) / frequenzaCardiaca.length;
    const interpretazioneFrequenzaCardiaca = document.getElementById("interpretazioneFrequenzaCardiaca");
        interpretazioneFrequenzaCardiaca.innerHTML = `<h3>Frequenza Cardiaca</h3><p>Media frequenza cardiaca: ${mediaFrequenzaCardiaca.toFixed(2)} bpm</p>`;
    if (mediaFrequenzaCardiaca > 100) {
        interpretazioneFrequenzaCardiaca.innerHTML += `<p><strong>Suggerimento:</strong> Se la frequenza cardiaca è frequentemente alta, prova a ridurre lo stress e ad aumentare l'attività fisica.</p>`;
    } else if (mediaFrequenzaCardiaca < 60) {
        interpretazioneFrequenzaCardiaca.innerHTML += `<p><strong>Suggerimento:</strong> Una frequenza cardiaca troppo bassa potrebbe indicare una scarsa condizione fisica, considera di consultare un medico.</p>`;
    }

    // Frequenza respiratoria
    const frequenzaRespiratoria = dati.map(d => d.frequenza_respiratoria);
    const mediaFrequenzaRespiratoria = frequenzaRespiratoria.reduce((a, b) => a + b, 0) / frequenzaRespiratoria.length;
    const interpretazioneFrequenzaRespiratoria = document.getElementById("interpretazioneFrequenzaRespiratoria");
        interpretazioneFrequenzaRespiratoria.innerHTML = `<h3>Frequenza Respiratoria</h3><p>Media frequenza respiratoria: ${mediaFrequenzaRespiratoria.toFixed(2)} rpm</p>`;
    if (mediaFrequenzaRespiratoria < 12 || mediaFrequenzaRespiratoria > 20) {
        interpretazioneFrequenzaRespiratoria.innerHTML += `<p><strong>Suggerimento:</strong> Una frequenza respiratoria fuori dalla norma può indicare problemi respiratori, consulta un medico se il valore è costantemente fuori range.</p>`;
    }

    // Temperatura
    const temperatura = dati.map(d => d.temperatura);
    const mediaTemperatura = temperatura.reduce((a, b) => a + b, 0) / temperatura.length;
    const interpretazioneTemperatura = document.getElementById("interpretazioneTemperatura");
        interpretazioneTemperatura.innerHTML = `<h3>Temperatura Corporea</h3><p>Media temperatura corporea: ${mediaTemperatura.toFixed(2)}°C</p>`;
    if (mediaTemperatura < 36.0 || mediaTemperatura > 37.5) {
        interpretazioneTemperatura.innerHTML += `<p><strong>Suggerimento:</strong> Se la temperatura corporea è costantemente fuori dal range normale, potrebbe essere necessario consultare un medico.</p>`;
    }

    // SpO2
    const spO2 = dati.map(d => d.spO2);
    const mediaSpO2 = spO2.reduce((a, b) => a + b, 0) / spO2.length;
    const interpretazioneSpO2 = document.getElementById("interpretazioneSpO2");
        interpretazioneSpO2.innerHTML = `<h3>Livelli di Ossigeno nel Sangue (SpO2)</h3><p>Media SpO2: ${mediaSpO2.toFixed(2)}%</p>`;
    if (mediaSpO2 < 95) {
        interpretazioneSpO2.innerHTML += `<p><strong>Suggerimento:</strong> Se i livelli di SpO2 sono costantemente bassi, potrebbe essere necessario consultare un medico, specialmente in presenza di difficoltà respiratorie.</p>`;
    }

    // Ore di sonno
    const oreSonno = dati.map(d => d.ore_sonno);
    const mediaOreSonno = oreSonno.reduce((a, b) => a + b, 0) / oreSonno.length;
    const interpretazioneSonnoOre = document.getElementById("interpretazioneSonnoOre");
        interpretazioneSonnoOre.innerHTML = `<h3>Ore di Sonno</h3><p>Media ore di sonno: ${mediaOreSonno.toFixed(2)}</p>`;
    if (mediaOreSonno < 7) {
        interpretazioneSonnoOre.innerHTML += `<p><strong>Suggerimento:</strong> Cerca di dormire almeno 7-8 ore per notte per migliorare la salute mentale e fisica.</p>`;
    }

    // Qualità del sonno
    const qualitaSonno = dati.map(d => d.qualita_sonno);
    const mediaQualitaSonno = qualitaSonno.reduce((a, b) => a + b, 0) / qualitaSonno.length;
    const interpretazioneSonnoQualita = document.getElementById("interpretazioneSonnoQualita");
        interpretazioneSonnoQualita.innerHTML = `<h3>Qualità del Sonno</h3><p>Media qualità del sonno: ${mediaQualitaSonno.toFixed(2)}%</p>`;
    if (mediaQualitaSonno < 75) {
        interpretazioneSonnoQualita.innerHTML += `<p><strong>Suggerimento:</strong> La qualità del sonno potrebbe migliorare con una routine regolare e tecniche per ridurre lo stress prima di dormire.</p>`;
    }
}