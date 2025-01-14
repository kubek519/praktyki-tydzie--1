document.getElementById("calculateBtn").addEventListener("click", function() {
    const salesValue = parseFloat(document.getElementById("salesValue").value);
    const profitMargin = parseFloat(document.getElementById("profitMargin").value);

    
    if (isNaN(salesValue) || isNaN(profitMargin) || salesValue <= 0 || profitMargin <= 0) {
        alert("Proszę wprowadzić poprawne wartości.");
        return;
    }
   
    const commission = (salesValue * profitMargin) / 100;
   
    const totalIncome = salesValue + commission;

    document.getElementById("commissionResult").textContent = `Prowizja: ${commission.toFixed(2)} PLN`;
    document.getElementById("totalIncome").textContent = `Kasa dla sprzedawcy: ${totalIncome.toFixed(2)} PLN`;
});
