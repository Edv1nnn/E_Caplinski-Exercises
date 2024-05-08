"use strict";

const Array = [1, 2, 3, 4, 4, 4, 4, 4, 5, 6, 6, 6, 6, 6, 7, 8, 8, 8, 8];
const Special = findSpecial(Array);

function findSpecial(array) {
    return Array.from(new Set(array));
}

console.log("Special elements are", Special);
