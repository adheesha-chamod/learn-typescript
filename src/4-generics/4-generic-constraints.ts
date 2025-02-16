interface User2 {
  name: string;
  password: string;
}

class Client implements User2 {
  constructor(
    public name: string,
    public password: string,
    public clientId: string
  ) {}
}

function echo<T extends User2>(value: T): T {
  return value;
}

const value = echo(new Client("John Doe", "@john123", "C1001"));
console.log(value);
