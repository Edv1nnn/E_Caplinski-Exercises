"use strict";

function isDivisibleIfThen(a, b) {
    if (b === 0) {
        console.log("Division by zero is not allowed.");
    } else if (a % b === 0) {
        console.log(`${a} is divisible by ${b} without remainder.`);
    } else {
        console.log(`${a} is not divisible by ${b} without remainder.`);
    };
};

function isDivisibleIfThenElse(a, b) {
    if (b === 0) {
        console.log("Division by zero is not allowed.");
    } else {
        if (a % b === 0) {
            console.log(`${a} is divisible by ${b} without remainder.`);
        } else {
            console.log(`${a} is not divisible by ${b} without remainder.`);
        }
    };
};

function isDivisibleSwitch(a, b) {
    if (b === 0) {
        console.log("Division by zero is not allowed.");
    } else {
        switch (a % b) {
            case 0:
                console.log(`${a} is divisible by ${b} without remainder.`);
                break;
            default:
                console.log(`${a} is not divisible by ${b} without remainder.`);
        }
    };
};

console.log(isDivisibleIfThen);