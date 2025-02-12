"use strict";
class Account5 {
    constructor(id, owner, _balance) {
        this.id = id;
        this.owner = owner;
        this._balance = _balance;
    }
    deposite(amount) {
        if (amount <= 0) {
            throw new Error("Invalid amount");
        }
        this._balance += amount;
    }
    getBalance() {
        return this._balance;
    }
}
const acc1 = new Account5(1, "john", 1000);
console.log(acc1);
