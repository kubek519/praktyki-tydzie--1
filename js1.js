document.getElementById("calculateBtn").addEventListener("click", function() {
    const amount = parseFloat(document.getElementById("amount").value);
    const taxRate = parseFloat(document.getElementById("taxRate").value);
    
    if (isNaN(amount) || isNaN(taxRate)) {
        alert("Proszę wprowadzić poprawne wartości.");
        return;
    }

    const isNet = document.getElementById("isNet").checked;
    const isGross = document.getElementById("isGross").checked;

    let resultNet, resultGross;

    if (isNet) {
        // Obliczanie brutto z netto
        resultGross = amount * (1 + taxRate / 100);
        resultNet = amount;
    } else if (isGross) {
        // Obliczanie netto z brutto
        resultNet = amount / (1 + taxRate / 100);
        resultGross = amount;
    }

    // Wyświetlanie wyników
    document.getElementById("resultNet").textContent = `Wynagrodzenie netto: ${resultNet.toFixed(2)} PLN`;
    document.getElementById("resultGross").textContent = `Wynagrodzenie brutto: ${resultGross.toFixed(2)} PLN`;
});
