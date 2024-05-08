"use strict";

const array1 = [5, 6, 1, 4, 9];
const array2 = [10, 20, 3, 13];

function Difference(array1, array2) {
    const difference = new Set([...array1, ...array2]);
    array1.forEach(element => difference.delete(element));
    array2.forEach(element => difference.delete(element));
    return Array.from(difference);
}

const differenceResult = Difference(array1, array2);
console.log("Difference:", differenceResult);
