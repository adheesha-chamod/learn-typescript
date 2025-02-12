class Account5 {
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

  getBalance(): number {
    return this._balance;
  }
}

const acc1 = new Account5(1, "john", 1_000);
console.log(acc1);
