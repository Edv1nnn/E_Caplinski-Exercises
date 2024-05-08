"use strict";

for (let integer = 1; integer <= 300; integer++) {
    let divisorCount = 0;

    for (let divisor = 1; divisor <= integer; divisor++) {
        if (integer % divisor === 0) {
            divisorCount++;
        }
    };

    if (divisorCount === 5) {
        console.log(integer);
    };
};
