"use strict";

const Array1 = [10, 20, 10, 4, 1, 2, 3];
const Array2 = [1, 4, 6, 2, 4];

function mergeAndRemoveDuplicates(array1, array2) {
    return [...new Set(array1.concat(array2))];
}

const mergedArray = mergeAndRemoveDuplicates(Array1, Array2);
console.log(mergedArray);
