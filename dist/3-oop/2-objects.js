"use strict";
class Account2 {
    constructor(id, owner, balance) {
        this.id = id;
        this.owner = owner;
        this.balance = balance;
    }
    deposite(amount) {
        if (amount <= 0) {
            throw new Error("Invalid amount");
        }
        this.balance += amount;
    }
}
let account = new Account2(1, "mahinda", 1000000000);
account.deposite(1000000);
console.log(account.id, account.owner, account.balance);
console.log(typeof account);
console.log(account instanceof Account2);
