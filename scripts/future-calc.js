'use strict'
//! CALCULATOR FOR FUTURE INVESTMENTS
function investmentCalculator() {
    const investDeposit = parseFloat(document.getElementById("investDeposit").value);
    const investIntRate = parseFloat(document.getElementById("investInterestRate").value);
    const investYears = parseFloat(document.getElementById("investedYears").value);

    // calculations
    // determine the future value and total interest earned
    const intConvertDaily = (investIntRate / 100) / 365; // interest rate converted for 365 days | daily
    const dailyCompound = investYears * 365 // calculates total compound daily after given years
    const totalMaturity = investDeposit * Math.pow(1 + intConvertDaily, dailyCompound); // total amount after given years
    const profitAmount = totalMaturity - investDeposit; // returns interest profit amount

    const futureValue = document.getElementById('futureValue');
    futureValue.innerHTML = `If you invest $${investDeposit} that earns ${investIntRate}% interest and matures in ${investYears} years.
                            Ending balance will be $${totalMaturity.toFixed(2)} and would earn $${profitAmount.toFixed(2)} in interest.`
};
// eventListener for button
const futureBtn = document.getElementById('futureCalculator');
futureBtn.addEventListener('click', investmentCalculator)