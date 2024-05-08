"use strict";

function findSumOfLargestNumbers(a, b, c) {
    let numbers = [a, b, c];
    numbers.sort((x, y) => y - x);
    let sumOfLargest = numbers[0] + numbers[1];
    return sumOfLargest;
};

let a = 2;
let b = 4;
let c = 6;

let result = findSumOfLargestNumbers(a, b, c);
console.log(`The sum of the two largest numbers is: ${result}`);