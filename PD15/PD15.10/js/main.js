"use strict";

const array = ["Apple", "Banana", "Peach", "Apple", "Orange"];

function removeDuplicates(data) {
    return Array.from(new Set(data));
}

console.log(removeDuplicates(array));
