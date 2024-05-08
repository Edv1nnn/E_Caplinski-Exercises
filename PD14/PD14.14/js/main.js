"use strict";

let start = 30;
let end = 40;

for (let number = start; number <= end; number++) {
    if (number % 3 === 0 && number % 10 !== 3) {
        console.log(number);
    };
};
