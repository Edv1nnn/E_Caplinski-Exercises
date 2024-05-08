"use strict";

function calculateSum(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    return sum;
}

function calculateProduct(numbers) {
    let product = 1;
    for (let i = 0; i < numbers.length; i++) {
        product *= numbers[i];
    }
    return product;
}

let numbers = [2, 4, 6, 8, 10];

let sum = calculateSum(numbers);
let product = calculateProduct(numbers);

console.log("Sum:", sum);
console.log("Product:", product);
