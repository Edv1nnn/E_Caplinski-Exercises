"use strict";

"use strict";

function isPerfectNumber(number) {
    let sum = 0;
    for (let i = 1; i <= number / 2; i++) {
        if (number % i === 0) {
            sum += i;
        }
    }
    return sum === number && number !== 0;
}

const number = 25;

if (isPerfectNumber(number)) {
    console.log(`${number} is a perfect number. So Edvinas is happy.`);
} else {
    console.log(`${number} is not a perfect number, so Edvinas is sad.`);
}
