let n1: number = 123_456;
let s1: string = "Hello world!";
let b1: boolean = false;

n1 = 123;
// n1 = 'Hi';   // compile-time error

console.log(typeof n1);
console.log(typeof s1);
console.log(typeof b1); 


let n2 = 456;
let s2 = "Hello world!";
let b2 = false;

n2 = 4_567.12;
// n2 = false;  // compile-time error

console.log(typeof n2);
console.log(typeof s2);
console.log(typeof b2);
