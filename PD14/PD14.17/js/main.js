"use strict";

let number = 5;
let found = 0;

while (found < 10) {
    let square = number * number;
    let numberAsString = square.toString();

    let reversed = numberAsString.split('').reverse().join('');

    if (numberAsString === reversed) {
        console.log(number, square);
        found++;
    }

    number++;
};
