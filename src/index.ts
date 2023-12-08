// ### basic types ###
let x: any = 1;
// console.log(x);

// ### array ###
let arr: number[] = [1, 2, 3, 4, 5];
let arr2: Array<number> = [1, 2, 3, 4, 5];
// console.log(arr);
// console.log(arr2);

// ### tuple ###
let person: [string, number, boolean] = ["Adheesha", 24, false];
// console.log(person);

// ### tuple array ###
let employee: [number, string][];
employee = [
  [1, "Adheesha"],
  [2, "Rajapaksha"],
  [3, "Saman"],
];
// console.log(employee[0][1]);

// ### union (one or many data types) ###
let pid: string | number;
pid = 100;
pid = "PD001";
// console.log(pid);

// ### enum (assign labels to numbers) ###
enum direction1 {
  up = 1,
  down,
  left,
  right,
}
// console.log(direction1.up);
// console.log(direction1.right);

// object
type User = {
  id: number;
  name: string;
};

const user1: User = {
  id: 1,
  name: "Adheesha",
};
// console.log(user1.id);

// ### type assertion ###
let cid: any = 1;
let customerId = cid as number;
// let customerId = <number>cid;

// ### functions ###
function sum(a: number, b: number): number {
  return a + b;
}

// console.log(sum(1, 2));

function message(msg: string | number): void {
  console.log("This is the message: " + msg);
}

// console.log(message("Hello World"));
// console.log(message(3933466));

// ### interfaces (custome type) ###
// best way to create objects
interface UserInterface {
  readonly id: number; // can't change after defining
  name: string;
  age?: number; // optional or age!: number; <-- non-null assertion operator (value will ba assigned later)
}

const user2: UserInterface = {
  id: 1,
  name: "Adheesha",
};

const user3: UserInterface = {
  id: 1,
  name: "Saman",
  age: 24,
};

// console.log(user2.name);

// ### function interface ###
interface MathFunc {
  (x: number, y: number): number;
}

const multiply: MathFunc = (x: number, y: number): number => x * y;
const divide: MathFunc = (x: number, y: number): number => x / y;

// console.log(multiply(2, 3));
// console.log(divide(100, 8));

// ### class ###
interface PersonInterface {
  id: number;
  name: string;
  register(): string;
}

class Person implements PersonInterface {
  id: number; // by default => public
  name: string;

  constructor(id: number, name: string) {
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
  position: string;

  constructor(id: number, name: string, position: string) {
    super(id, name);
    this.position = position;
  }
}

const emp1 = new Employee(1002, "Kamal", "Manager");
// console.log(emp1.register());

// ### generics (reusable components) ###
// use when we want to use multiple data types
function getArray<T>(items: T[]): T[] {
  return new Array().concat(items);
}

let numArray = getArray<number>([1, 2, 3, 4, 5]);
let strArray = getArray<string>(["Adheesha", "Saman", "Kamal"]);

// console.log(numArray);
// console.log(strArray);
