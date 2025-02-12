class Account6 {
  nickname?: string;

  constructor(
    public readonly id: number,
    public owner: string,
    private _balance: number
  ) {}

  deposite(amount: number): void {
    if (amount <= 0) {
      throw new Error("Invalid amount");
    }

    this._balance += amount;
  }

  // getter
  get balance(): number {
    return this._balance;
  }

  // setter
  set balance(value: number) {
    if (value <= 0) {
      throw new Error("Invalid value");
    }

    this._balance = value;
  }
}

const acc2 = new Account6(1, "john", 1_000);
console.log(acc2.balance);

acc2.balance = 2_000;
console.log(acc2.balance);
