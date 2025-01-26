"use strict";
let employee1 = {
    id: 1,
    name: "adheesha",
    retire(date) {
        console.log(this.id, this.name, date);
    },
};
let employee2 = {
    id: 2,
    name: "john",
    retire(date) {
        console.log(this.id, this.name, date);
    },
};
employee1.retire(new Date());
employee2.retire(new Date());
