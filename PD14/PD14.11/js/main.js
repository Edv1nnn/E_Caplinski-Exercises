"use strict";

let number = 50;

let divisors = [];
let sumOfDivisors = 0;
let sumOfEvenDivisors = 0;

for (let i = 1; i <= number; i++) {
    if (number % i === 0) {
        divisors.push(i);
        sumOfDivisors += i;
        if (i % 2 === 0) {
            sumOfEvenDivisors += i;
        };
    };
};

console.log("All divisors:", divisors);
console.log("Sum of divisors:", sumOfDivisors);
console.log("Sum of even divisors:", sumOfEvenDivisors);
