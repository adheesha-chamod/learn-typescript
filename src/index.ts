/**
 * Note:
 * - Uncomment the code snippets one by one and run the code.
 */

/* Basics */

// let x: number = 10;
// console.log(x);

// let y = 20; // this is also allowed in TypeScript
// console.log(y);

// // y = 'Hello'         // this will throw an error

// let z: string;
// z = "Hi";
// console.log(z);

//=======================================================

/* Types in TypeScript */

// let n1: number = 100;
// let s1: string = "Hello";
// let b1: boolean = true;

// console.log(n1, s1, b1);

// console.log("Type of n1:", typeof n1);
// console.log("Type of s1:", typeof s1);
// console.log("Type of b1:", typeof b1);

//=======================================================

/* Special Types */

// let ano1: any = 100;
// console.log("Type of ano1:", typeof ano1);

// ano1 = "Hello";
// console.log("Type of ano1:", typeof ano1);

// ano1 = true;
// console.log("Type of ano1:", typeof ano1);

//=======================================================

/* Arrays */

// let ar1: number[] = [1, 2, 3, 4, 5];
// console.log("Type of ar1:", typeof ar1);

// let ar2: string[] = ["Hello", "World"];
// console.log("Type of ar2:", typeof ar2);

// let ar3: boolean[] = [true, false];
// console.log("Type of ar3:", typeof ar3);

// // let ar4: number[] = [1, 2, 3, true, "Hello"]; // this isn't allowed in TypeScript

// let ar4: any[] = [1, 2, 3, true, "Hello"];
// console.log("Type of ar4:", typeof ar4);

// console.log("Before Pushing to ar1:", ar1);

// ar1.push(6);
// console.log("After Pushing to ar1:", ar1);

// ar1.pop();
// console.log("After Popping from ar1:", ar1);

// // ar1.push("Adheesha"); // this isn't allowed in TypeScript

// console.log("Before Pushing to ar4:", ar4);

// ar4.push(false);
// console.log("After Pushing to ar4:", ar4);

//=======================================================

/* Tuples */

// let tup1: [number, string, boolean, string] = [123, "UCSC", true, "Colombo"];
// console.log("tup1:", tup1);
// console.log("Type of tup1:", typeof tup1);

// // let tup2: [number, number, string] = [1, 2, false]; // this isn't allowed in TypeScript

//=======================================================

/* Tuple Array */

// array of tuples

// let tupAr1: [number, string][];
// tupAr1 = [
//   [1, "One"],
//   [2, "Two"],
//   [3, "Three"],
// ];
// console.log("tupAr1:", tupAr1);
// console.log("Type of tupAr1:", typeof tupAr1);

//=======================================================

/* Unions */

// if we want to allow multiple types for a variable

// let un1: number | string;

// un1 = 2024;
// console.log("un1:", un1, "and its type:", typeof un1);

// un1 = "UCSC";
// console.log("un1:", un1, "and its type:", typeof un1);

// // un1 = true;     // error

//=======================================================

/* Enums */

// allows us to define a set of named constants either numeric or string

// enum Direction1 {
//   UP,
//   DOWN,
//   LEFT,
//   RIGHT
// }

// enum Direction2 {
//   UP = 10,
//   DOWN,
//   LEFT,
//   RIGHT
// }

// enum Direction3 {
//   UP = "Up",
//   DOWN = "Down",
//   LEFT = "Left",
//   RIGHT = "Right"
// }

// console.log(Direction1.UP);
// console.log(Direction2.UP);
// console.log(Direction3.UP);

// console.log(Direction1.DOWN)
// console.log(Direction2.DOWN)
// console.log(Direction3.DOWN)

//=======================================================

/* Objects */

// type User = {
//   id: number;
//   name: string;
//   isAvailable: boolean;
// };

// const user1: User = {
//   id: 1,
//   name: "Adheesha",
//   isAvailable: true,
// };

// // const user2: User = {
// //   id: "E001",
// //   name: "Saman",
// //   isAvailable: 1,
// // };                      // error

// console.log("user1:", user1);
// console.log("Type of user1:", typeof user1);

// console.log("Id of user1:", user1.id);
// console.log("Name of user1:", user1.name);
// console.log("Availability of user1:", user1.isAvailable);

//=======================================================

/* Type Assertion */

// // first way
// let pid1: any = 100021;
// console.log("pid1:", pid1);
// console.log("Type of pid1:", typeof pid1);

// let pid2 = <number>pid1;
// console.log("pid2:", pid2);
// console.log("Type of pid2:", typeof pid2);

// // second way
// let pid3: any = 100022;
// console.log("pid3:", pid3);
// console.log("Type of pid3:", typeof pid3);

// let pid4 = pid3 as number;
// console.log("pid4:", pid4);
// console.log("Type of pid4:", typeof pid4);

//=======================================================

/* Functions */

// function add(a: number, b: number): number {
//     return a + b;
// }

// function printMessage(message: string | number): void {
//     console.log(message);
// }

// console.log("add(10, 20):", add(10, 20));

// printMessage("Hello");
// printMessage(12123);

//=======================================================

/* Interfaces */

// // a custom type or a specific structure for an object or a function

// // define interfaces for objects

// interface UserInterface {
//   readonly id: number;
//   name: string;
//   isAvailable: boolean;
//   age ?: number;        // optional property
// };

// const user1: UserInterface = {
//   id: 1,
//   name: "Adheesha",
//   isAvailable: true,
//   age: 25
// };

// console.log("user1:", user1);
// console.log("Type of user1:", typeof user1);

// // user1.id = 2;       // error

// const user2: UserInterface = {
//   id: 2,
//   name: "Namal",
//   isAvailable: false,
// //   age: 28,      // this is optional
// };

// console.log("user2:", user2);
// console.log("Type of user2:", typeof user2);

// // interfaces can't use with primitive types and unions
// // but types can use with primitive types and unions

// // ------------------------------------------------------

// // define interfaces for functions

// interface mathFunction {
//     (a: number, b: number): number;
// }

// const add: mathFunction = (a: number, b: number): number => {
//     return a + b;
// }

// const sub: mathFunction = (a: number, b: number): number => {
//     return a - b;
// }

// const mul: mathFunction = (a: number, b: number): number => {
//     return a * b;
// }

// const div: mathFunction = (a: number, b: number): number => {
//     if (b === 0) {
//         throw new Error("Can't divide by zero");
//     }
//     return a / b;
// }

// console.log("div(10, 2):", div(10, 2));
// console.log("div(10, 0):", div(10, 0));

//=======================================================

/* Classes */

// // in ts, js, multiple constructor implementations are not allowed
// // access modifiers -> public, private & protected
// // pu default, attributes and methods are public

// interface PersonInterface {
// 	id: number;
// 	name: string;

// 	// toString(): string;		// private methods should not include in the respective interface -> include only public once
// 	register(): void;
// }

// // including interface is optional
// class Person implements PersonInterface {
//   id: number;
//   name: string;

//   constructor(id: number, name: string) {
//     this.id = id;
//     this.name = name;
//   }

//   private toString(): string {
// 	return `${this.id} : ${this.name}`
//   }

//   register(): void {
// 	console.log(`User => ${this.toString()} registered`);
//   }
// }

// const person1 = new Person(1, "Brad");
// const person2 = new Person(2, "Mike");

// console.log(person1);
// console.log(person2);

// console.log(person1.register());
// console.log(person2.register());

// // ------------------------------------------------------

// // inheritance

// class Employee extends Person {
// 	position: string;

// 	constructor(id: number, name: string, position: string) {
// 		super(id, name);
// 		this.position = position;
// 	}
// }

// const employee = new Employee(3, "Sandun", "SSE");
// console.log(employee.register());

//=======================================================

