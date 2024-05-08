"use strict";

const Array = [5, 3, 8, 1, 2, 3, 7, 1, 1, 4, 7, 10];
const result = smallestNumber(Array);

function smallestNumber(array) {
    const uniqueArray = [...new Set(array)].sort((a, b) => a - b);
    return uniqueArray.length >= 3 ? uniqueArray[2] : "Not enough";
}

console.log("The third smallest number is:", result);
