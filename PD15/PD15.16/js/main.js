"use strict";

const Array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function RandomArray(array) {
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
}

const RandomElement = RandomArray(Array);
console.log("Random:", RandomElement);
