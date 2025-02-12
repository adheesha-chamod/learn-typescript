"use strict";
class Person2 {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}
class Teacher extends Person2 {
    get fullName() {
        return `Prof. ${super.fullName}`;
    }
}
const teacher = new Teacher("John", "Smith");
console.log(teacher.fullName);
