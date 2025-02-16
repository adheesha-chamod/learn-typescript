class KeyValuePair<K, V> {
  constructor(public key: K, public value: V) {}
}

// hover over the variables
const pair1 = new KeyValuePair<number, string>(1, "Apple");
const pair2 = new KeyValuePair<string, string>("S1", "John Doe");
const pair3 = new KeyValuePair<string, object>("E001", {
  name: "Jane Doe",
  age: 25,
});
const pair4 = new KeyValuePair(1001, "Sri Lanka"); // type infer

console.log(pair1);
console.log(pair2);
console.log(pair3);
console.log(pair4);
