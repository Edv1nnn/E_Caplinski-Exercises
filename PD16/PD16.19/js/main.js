"use strict";

function bubbleSort(arr) {
    const length = arr.length;
    for (let i = 0; i < length - 1; i++) {
        for (let j = 0; j < length - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }
    return arr;
}

const initialArray = [50, 21, 70, 11, 17, 36, 47];
const sortedArray = bubbleSort(initialArray.slice());
console.log(sortedArray);