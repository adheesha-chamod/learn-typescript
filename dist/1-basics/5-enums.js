"use strict";
var Size;
(function (Size) {
    Size[Size["SMALL"] = 1] = "SMALL";
    Size[Size["MEDIUM"] = 2] = "MEDIUM";
    Size[Size["LARGE"] = 3] = "LARGE";
})(Size || (Size = {}));
const mySize = Size.MEDIUM;
console.log(mySize);
