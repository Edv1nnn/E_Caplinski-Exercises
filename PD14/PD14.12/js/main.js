"use strict";

let number = 5;
let prime = number > 1;

for (let divisor = 2; divisor < number; divisor++) {
    if (number % divisor === 0) {
        prime = false;
        break;
    }
};

console.log(`${number} ${prime ? 'is' : 'is not'} a prime number.`);
