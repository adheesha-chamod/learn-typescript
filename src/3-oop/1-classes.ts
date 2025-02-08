class Account {
  id: number;
  owner: string;
  balance: number;

  // hover over the constructor
  constructor(id: number, owner: string, balance: number) {
    this.id = id;
    this.owner = owner;
    this.balance = balance;
  }

  deposite(amount: number): void {
    if (amount <= 0) {
      throw new Error("Invalid amount");
    }

    this.balance += amount;
  }
}
