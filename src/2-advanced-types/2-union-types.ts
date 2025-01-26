function kgtoLbs(weight: number | string): number {
  // narrowing
  if (typeof weight === "number") {
    return weight * 2.2;
  }

  return parseInt(weight) * 2.2;
}

console.log(kgtoLbs(10));
console.log(kgtoLbs("10kg"));
