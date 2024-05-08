"use strict";

function largestRectangleArea(s) {
    let sideLength = Math.floor(s / 2);
    let area = sideLength * sideLength;
    return area;
};

let ropeLength = 8;

let largestArea = largestRectangleArea(ropeLength);
console.log(`The largest rectangle area that a farmer can mark with ${ropeLength} meters of rope is ${largestArea} square meters.`);
