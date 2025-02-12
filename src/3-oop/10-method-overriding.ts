class Person2 {
  constructor(public firstName: string, public lastName: string) {}

  get fullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }
}

class Teacher extends Person2 {
  override get fullName(): string {
    return `Prof. ${super.fullName}`;
  }
}

const teacher = new Teacher("John", "Smith");
console.log(teacher.fullName);
