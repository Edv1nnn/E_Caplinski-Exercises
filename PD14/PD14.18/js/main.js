"use strict";

let start = 96;
let end = 103;

let k = 0;

for (let number = start; number <= end; number++) {
    let numberAsString = number.toString();
    k += numberAsString.length;
};

console.log(`Number of digits needed = ${k}`);
