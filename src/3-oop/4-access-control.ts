class Account4 {
  readonly id: number;
  readonly owner: string;
  nickname?: string;

  private _balance: number;

  constructor(id: number, owner: string, balance: number) {
    this.id = id;
    this.owner = owner;
    this._balance = balance;
  }

  deposite(amount: number): void {
    if (amount <= 0) {
      throw new Error("Invalid amount");
    }

    this._balance += amount;
    this.logTransaction();
  }

  private logTransaction(): void {
    console.log("Transaction...");
  }

  getBalance(): number {
    return this._balance;
  }
}

const accountx = new Account4(1, "john", 1_000);
accountx.deposite(100);
// console.log(accountx._balance); // compile error
console.log(accountx.getBalance());
