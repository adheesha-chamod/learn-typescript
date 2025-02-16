"use strict";
class KeyValuePair {
    constructor(key, value) {
        this.key = key;
        this.value = value;
    }
}
const pair1 = new KeyValuePair(1, "Apple");
const pair2 = new KeyValuePair("S1", "John Doe");
const pair3 = new KeyValuePair("E001", {
    name: "Jane Doe",
    age: 25,
});
const pair4 = new KeyValuePair(1001, "Sri Lanka");
console.log(pair1);
console.log(pair2);
console.log(pair3);
console.log(pair4);
