"use strict";
class Account6 {
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
    get balance() {
        return this._balance;
    }
    set balance(value) {
        if (value <= 0) {
            throw new Error("Invalid value");
        }
        this._balance = value;
    }
}
const acc2 = new Account6(1, "john", 1000);
console.log(acc2.balance);
acc2.balance = 2000;
console.log(acc2.balance);
