"use strict";

const arr1 = [5, 6, 1, 4, 9];
const arr2 = [10, 20, 3, 13];

function mergeArrays(arr1, arr2) {
    return [...new Set([...arr1, ...arr2])];
}

const result = mergeArrays(arr1, arr2);

console.log(result);
