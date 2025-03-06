// Calcola media mensile
export function calcolaMediaMensile(datiGiornalieri) {
    const mese = [];
    const passi = datiGiornalieri.reduce((acc, d) => acc + d.passi, 0) / datiGiornalieri.length;
    const frequenza_cardiaca = datiGiornalieri.reduce((acc, d) => acc + d.frequenza_cardiaca, 0) / datiGiornalieri.length;
    const frequenza_respiratoria = datiGiornalieri.reduce((acc, d) => acc + d.frequenza_respiratoria, 0) / datiGiornalieri.length;
    const temperatura = datiGiornalieri.reduce((acc, d) => acc + d.temperatura, 0) / datiGiornalieri.length;
    const spO2 = datiGiornalieri.reduce((acc, d) => acc + d.spO2, 0) / datiGiornalieri.length;
    const ore_sonno = datiGiornalieri.reduce((acc, d) => acc + d.ore_sonno, 0) / datiGiornalieri.length;
    const qualita_sonno = datiGiornalieri.reduce((acc, d) => acc + d.qualita_sonno, 0) / datiGiornalieri.length;

    mese.push({
        mese: 'Febbraio 2025',
        passi,
        frequenza_cardiaca,
        frequenza_respiratoria,
        temperatura,
        spO2,
        ore_sonno,
        qualita_sonno
    });

    return mese;
}
