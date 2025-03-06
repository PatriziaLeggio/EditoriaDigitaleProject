export function calcolaMediaSettimanale(datiGiornalieri) {
    if (!Array.isArray(datiGiornalieri) || datiGiornalieri.length === 0) {
        console.error("I dati giornalieri sono invalidi o vuoti.");
        return [];  // Restituisci un array vuoto se i dati non sono validi
    }

    const settimanale = [];
    for (let i = 0; i < datiGiornalieri.length; i += 7) {
        const settimana = datiGiornalieri.slice(i, i + 7);

        // Verifica che la settimana abbia abbastanza dati
        if (settimana.length === 0) continue;

        // Calcola la media per ogni metrica, controllando che ogni proprietà esista
        const passi = settimana.reduce((acc, d) => acc + (d.passi || 0), 0) / settimana.length;
        const frequenza_cardiaca = settimana.reduce((acc, d) => acc + (d.frequenza_cardiaca || 0), 0) / settimana.length;
        const frequenza_respiratoria = settimana.reduce((acc, d) => acc + (d.frequenza_respiratoria || 0), 0) / settimana.length;
        const temperatura = settimana.reduce((acc, d) => acc + (d.temperatura || 0), 0) / settimana.length;
        const spO2 = settimana.reduce((acc, d) => acc + (d.spO2 || 0), 0) / settimana.length;
        const ore_sonno = settimana.reduce((acc, d) => acc + (d.ore_sonno || 0), 0) / settimana.length;
        const qualita_sonno = settimana.reduce((acc, d) => acc + (d.qualita_sonno || 0), 0) / settimana.length;

        settimanale.push({
            settimana: `Settimana ${Math.ceil((i + 1) / 7)}`,
            passi,
            frequenza_cardiaca,
            frequenza_respiratoria,
            temperatura,
            spO2,
            ore_sonno,
            qualita_sonno
        });
    }

    return settimanale;
}
