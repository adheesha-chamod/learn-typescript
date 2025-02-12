class Person3 {
  constructor(public firstName: string, public lastName: string) {}

  get fullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }
}

class Teacher2 extends Person3 {
  override get fullName(): string {
    return `Prof. ${super.fullName}`;
  }
}

class Student2 extends Person3 {
  override get fullName(): string {
    return `Mr. ${super.fullName}`;
  }
}

function printNames(people: Person3[]) {
  for (let person of people) {
    console.log(person.fullName);
  }
}

printNames([
  new Person3("John", "Doe"),
  new Teacher2("Jane", "Smith"),
  new Student2("John", "Wick"),
]);
