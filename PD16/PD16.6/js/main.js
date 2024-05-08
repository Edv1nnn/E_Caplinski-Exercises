"use strict";

function reverseNumber(number) {
    let reverse = 0;
    if (number <= 0) {
        return 0;
    } else {
        while (number > 0) {
            let lastDigit = number % 10;
            reverse = (reverse * 10) + lastDigit;
            number = Math.floor(number / 10);
        }
        return reverse;
    }
}

console.log(reverseNumber(42));
