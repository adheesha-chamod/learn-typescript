// const SMALL = 1;
// const MEDIUM = 2;
// const LARGE = 3;

// generate verbose js code
enum Size {
  SMALL = 1,
  MEDIUM,
  LARGE,
}

// generate optimized js code
// const enum Size {
//   SMALL = 1,
//   MEDIUM,
//   LARGE,
// }

const mySize: Size = Size.MEDIUM;
console.log(mySize); // print 2
