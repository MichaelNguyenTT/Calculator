'use strict'

//! MORTGAGECALCULATOR
function mortgageCalculator() {
    //  inputs
    const depositAmountField = document.getElementById("depositAmount");
    const interestRateField = document.getElementById("interestRate");
    const loanYearField = document.getElementById("loanYear");
    // converts the value to a number
    const loanAmount = parseFloat(depositAmountField.value);
    const interestRate = parseFloat(interestRateField.value);
    const years = parseFloat(loanYearField.value);
    
    // Calculations
    const monthlyInterest = (interestRate / 100) / 12 // Interest Rate monthly
    const loanPayments = years * 12 // amount of payments for 15 years
    // formula to calculate monthly payments with loan years
    const x = Math.pow(1 + monthlyInterest, loanPayments) - 1;
    const y = monthlyInterest * (Math.pow(1 + monthlyInterest, loanPayments))
    const monthlyPayment = loanAmount / (x / y); // monthly payment w/ a 15 year loan interest
    const totalInterestAmount = monthlyPayment * loanPayments - loanAmount  // total amount including interest for 15-year loan
    
    // output
    const mortgageResult = document.getElementById('mortgageOutput');
          mortgageResult.innerHTML = `A $${loanAmount} loan at ${interestRate}% interest for ${years} years. You would have a $${monthlyPayment.toFixed(2)}/mo payment with a total interest of $${totalInterestAmount.toFixed(2)}`
};
// eventListener for button
const mortgageBtn = document.getElementById('mortgageCalculator');
mortgageBtn.addEventListener('click', mortgageCalculator)

