"use strict";

function checkInequality(a, b, c) {
    return (a < b && b < c) || (b > a && a > c);
};

let a = 2;
let b = 5;
let c = 8;

let result = checkInequality(a, b, c);

if (result) {
    console.log(`Inequality ${a} < ${b} < ${c} or ${b} > ${a} > ${c} is satisfied.`);
} else {
    console.log(`Inequality ${a} < ${b} < ${c} or ${b} > ${a} > ${c} is not satisfied.`);
};