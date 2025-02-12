"use strict";
class Person3 {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}
class Teacher2 extends Person3 {
    get fullName() {
        return `Prof. ${super.fullName}`;
    }
}
class Student2 extends Person3 {
    get fullName() {
        return `Mr. ${super.fullName}`;
    }
}
function printNames(people) {
    for (let person of people) {
        console.log(person.fullName);
    }
}
printNames([
    new Person3("John", "Doe"),
    new Teacher2("Jane", "Smith"),
    new Student2("John", "Wick"),
]);
