"use strict";

function CreatedArray(start, end) {
    const resultArray = [];
    for (let i = start; i <= end; i++) {
        resultArray.push(i);
    }
    return resultArray;
}

const Start = 3;
const End = 5;
const Step = CreatedArray(Start, End);

console.log("Array:", Step);
