"use strict";

let returnBiggerNumber = (arr, num) => {
    const index = arr.findIndex(element => element > num);
    if (index !== -1) {
        return arr.slice(index);
    } else {
        return arr;
    }
};

console.log(returnBiggerNumber([50, 12, 0, 43, 1, 70], 15));
console.log(returnBiggerNumber([2, 20, 52, 64, 81], 50));