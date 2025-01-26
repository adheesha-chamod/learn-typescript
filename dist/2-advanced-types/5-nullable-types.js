"use strict";
function greet(name) {
    if (name) {
        console.log(name.toUpperCase());
    }
    else {
        console.log("Hi!");
    }
}
greet("john");
greet(null);
