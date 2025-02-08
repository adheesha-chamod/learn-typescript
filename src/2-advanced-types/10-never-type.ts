// this function never returns
function processEvents(): never {
  while (true) {
    // read a message from queue
  }
}

// this function never returns, only throwing exception
function reject(message: string): never {
  throw new Error("Error:" + message);
}

// processEvents();
// // reject("error");

console.log("Hello world!"); // unrechable code, since previous method call never stops
