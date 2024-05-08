"use strict";

const numberOfChristmasTrees = 6;
const treeHeights = [167, 134, 145, 156, 155, 176];

let sum = 0;
for (let i = 0; i < numberOfChristmasTrees; i++) {
  sum += treeHeights[i];
}

const averageHeight = sum / numberOfChristmasTrees;

console.log(`Average height of the Christmas trees: ${averageHeight.toFixed(2)} cm.`);
