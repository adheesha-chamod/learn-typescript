// optional param
// function calculateTax(income: number, taxYear?: number): number {
//   if ((taxYear || 2025) <= 2025) {
//     return income * 0.12;
//   }

//   return income * 0.13;
// }

// param with default value
function calculateTax(income: number, taxYear: number = 2025): number {
  if (taxYear <= 2025) {
    return income * 0.12;
  }

  return income * 0.13;
}

const tax = calculateTax(10_000);
console.log(tax);
