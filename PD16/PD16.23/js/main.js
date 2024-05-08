"use strict";

function addNumbers(a, b) {
    return a + b;
}

function subtractNumbers(a, b) {
    return a - b;
}

function multiplyNumbers(a, b) {
    return a * b;
}

function divideNumbers(a, b) {
    if (b < 0) {
        window.alert("Skaicius per mazas");
    } else {
        return a / b;
    }
}

const additionNumbers = addNumbers(2, 4);
const substract = subtractNumbers(10, 5);
const multiply = multiplyNumbers(20, 5);
const divisions = divideNumbers(50, 2);

console.log(additionNumbers);
console.log(substract);
console.log(multiply);
console.log(divisions);