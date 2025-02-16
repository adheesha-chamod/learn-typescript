"use strict";
class Client {
    constructor(name, password, clientId) {
        this.name = name;
        this.password = password;
        this.clientId = clientId;
    }
}
function echo(value) {
    return value;
}
const value = echo(new Client("John Doe", "@john123", "C1001"));
console.log(value);
