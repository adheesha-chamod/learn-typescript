"use strict";
function calculateTax(income, taxYear = 2025) {
    if (taxYear <= 2025) {
        return income * 0.12;
    }
    return income * 0.13;
}
const tax = calculateTax(10000);
console.log(tax);
