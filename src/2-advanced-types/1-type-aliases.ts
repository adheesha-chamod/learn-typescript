type Employee = {
  readonly id: number;
  name: string;
  retire: (data: Date) => void;
};

let employee1: Employee = {
  id: 1,
  name: "adheesha",
  retire(date: Date) {
    console.log(this.id, this.name, date);
  },
};

let employee2: Employee = {
  id: 2,
  name: "john",
  retire(date: Date) {
    console.log(this.id, this.name, date);
  },
};

employee1.retire(new Date());
employee2.retire(new Date());
