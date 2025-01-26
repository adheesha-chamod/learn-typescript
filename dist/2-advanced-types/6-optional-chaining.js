"use strict";
var _a, _b;
function getCustomer(id) {
    return id === 0 ? null : { birthday: new Date() };
}
let customer1 = getCustomer(0);
console.log((_a = customer1 === null || customer1 === void 0 ? void 0 : customer1.birthday) === null || _a === void 0 ? void 0 : _a.getFullYear);
let customer2 = getCustomer(1);
console.log((_b = customer2 === null || customer2 === void 0 ? void 0 : customer2.birthday) === null || _b === void 0 ? void 0 : _b.getFullYear());
