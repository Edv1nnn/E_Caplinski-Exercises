"use strict";

function arrayRows(n) {
    return Array.from({ length: n }, () => Array(n).fill(0));
}

const n = 5;
const results = arrayRows(n);
console.log(results);
