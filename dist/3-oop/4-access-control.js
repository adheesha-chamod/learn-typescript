"use strict";
class Account4 {
    constructor(id, owner, balance) {
        this.id = id;
        this.owner = owner;
        this._balance = balance;
    }
    deposite(amount) {
        if (amount <= 0) {
            throw new Error("Invalid amount");
        }
        this._balance += amount;
        this.logTransaction();
    }
    logTransaction() {
        console.log("Transaction...");
    }
    getBalance() {
        return this._balance;
    }
}
const accountx = new Account4(1, "john", 1000);
accountx.deposite(100);
console.log(accountx.getBalance());
