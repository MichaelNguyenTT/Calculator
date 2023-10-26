'use strict'
//! calculator for ordinary annuity
function annuityCalculator() {
    // calculation testing
    const monthlyValue = parseFloat(document.getElementById("monthlyValue").value);
    const annuityRate = parseFloat(document.getElementById("annuityRate").value);
    const annuityYears = parseFloat(document.getElementById("annuityYears").value);
    
    // calculating present value
    if (annuityYears <= 50) {
        const totalPeriods = annuityYears * 12 // total # of payments 
        const monthlyRate = (annuityRate / 100) / 12; // monthly rate annually
        const totalRate = (1 - Math.pow(1 + monthlyRate, -totalPeriods)) / monthlyRate; // Total rate with given years
        const presentValue = monthlyValue * totalRate; // annual amount
        const periodicValue = presentValue / totalRate; // monthly amount every period
    // output
        const annuityValue = document.getElementById("annuityValue");
        annuityValue.innerHTML = `Annuity that pays $${monthlyValue} for ${annuityYears} years and earns expected ${annuityRate}% interest rate. You would need to invest $${presentValue.toFixed(2)}.`
    } else {
        alert('Please put a realistic year.');
        return false;
    }
};

const annuityBtn = document.getElementById('annuityCalculator');
annuityBtn.addEventListener('click', annuityCalculator)