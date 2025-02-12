class Person {
  constructor(public firstName: string, public lastName: string) {}

  get fullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }

  talk(): void {
    console.log("Talking...");
  }
}

class Student extends Person {
  constructor(
    public readonly studentId: number,
    firstName: string, // no need to add public, since this already defined in super class
    lastName: string // no need to add public, since this already defined in super class
  ) {
    super(firstName, lastName);
  }

  takeTest(): void {
    console.log("Taking a test...");
  }
}

const student = new Student(1, "John", "Doe");
console.log(student);

console.log(student.fullName);
student.talk();
student.takeTest();
