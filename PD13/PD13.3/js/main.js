"use strict";

const x = 2;
const y = -2;
const z = 4;

let smallest, middle, largest;

if (x <= y && x <= z) {
    smallest = x;
    middle = (y <= z) ? y : z;
    largest = (y > z) ? y : z;
}

else if (y <= x && y <= z) {
    smallest = y;
    middle = (x <= z) ? x : z;
    largest = (x > z) ? x : z;
}

else {
    smallest = z;
    middle = (x <= y) ? x : y;
    largest = (x > y) ? x : y;
}

console.log("Result: " + smallest + ", " + middle + ", " + largest);