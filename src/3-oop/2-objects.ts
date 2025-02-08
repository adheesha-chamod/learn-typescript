// change name to "Account2" to avoid from compilation error
class Account2 {
  id: number;
  owner: string;
  balance: number;

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

let account = new Account2(1, "mahinda", 1_000_000_000);
account.deposite(1_000_000);

console.log(account.id, account.owner, account.balance);
console.log(typeof account); // object
console.log(account instanceof Account2); // true
