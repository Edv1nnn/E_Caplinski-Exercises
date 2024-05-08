"use strict";

function divisorCheck(a, b) {
    if (b === 0) {
        return "Cannot divide by zero.";
    }

    if (a % b === 0) {
        return `${a} is divisible by ${b}.`;
    } else {
        return `${a} is not divisible by ${b}.`;
    }
}

let b = 14;
let a = 6;

let result = divisorCheck(a, b);
console.log(result);