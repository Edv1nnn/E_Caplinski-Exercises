"use strict";

let array = [1, 2, 3, 4, 2, 5, 2, 6];
let searchElement = 2;
let elementCounter = 0;

for (let i = 0; i < array.length; i++) {
    if (array[i] === searchElement)
        elementCounter++
};

console.log("The element " + searchElement + " appeared " + elementCounter + " times.");
