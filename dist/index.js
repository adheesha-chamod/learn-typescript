"use strict";
// ### basic types ###
let x = 1;
// console.log(x);
// ### array ###
let arr = [1, 2, 3, 4, 5];
let arr2 = [1, 2, 3, 4, 5];
// console.log(arr);
// console.log(arr2);
// ### tuple ###
let person = ["Adheesha", 24, false];
// console.log(person);
// ### tuple array ###
let employee;
employee = [
    [1, "Adheesha"],
    [2, "Rajapaksha"],
    [3, "Saman"],
];
// console.log(employee[0][1]);
// ### union (one or many data types) ###
let pid;
pid = 100;
pid = "PD001";
// console.log(pid);
// ### enum (assign labels to numbers) ###
var direction1;
(function (direction1) {
    direction1[direction1["up"] = 1] = "up";
    direction1[direction1["down"] = 2] = "down";
    direction1[direction1["left"] = 3] = "left";
    direction1[direction1["right"] = 4] = "right";
})(direction1 || (direction1 = {}));
const user1 = {
    id: 1,
    name: "Adheesha",
};
// console.log(user1.id);
// ### type assertion ###
let cid = 1;
let customerId = cid;
// let customerId = <number>cid;
// ### functions ###
function sum(a, b) {
    return a + b;
}
// console.log(sum(1, 2));
function message(msg) {
    console.log("This is the message: " + msg);
}
const user2 = {
    id: 1,
    name: "Adheesha",
};
const user3 = {
    id: 1,
    name: "Saman",
    age: 24,
};
const multiply = (x, y) => x * y;
const divide = (x, y) => x / y;
class Person {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    register() {
        return `${this.name} is now registered as ${this.id}`;
    }
}
const person1 = new Person(1001, "Namal");
// console.log(person1.register());
// sub class from Person
class Employee extends Person {
    constructor(id, name, position) {
        super(id, name);
        this.position = position;
    }
}
const emp1 = new Employee(1002, "Kamal", "Manager");
// console.log(emp1.register());
// ### generics (reusable components) ###
// use when we want to use multiple data types
function getArray(items) {
    return new Array().concat(items);
}
let numArray = getArray([1, 2, 3, 4, 5]);
let strArray = getArray(["Adheesha", "Saman", "Kamal"]);
// console.log(numArray);
// console.log(strArray);
