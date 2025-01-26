function greet(name: string | null) {
  if (name) {
    console.log(name.toUpperCase());
  } else {
    console.log("Hi!");
  }
}

greet("john");
greet(null);
// greet(undefined);    // compile error
