// hover over the variables: email1, email2 and email3

let email1 = document.getElementById("email");
// console.log(email1.value);   // cann't access the value property

// type assertion
// no type converstion happening under the hood
let email2 = document.getElementById("email") as HTMLInputElement;
console.log(email2.value);

// type assertion (another way)
// no type converstion happening under the hood
let email3 = <HTMLInputElement>document.getElementById("email");
console.log(email3.value);
