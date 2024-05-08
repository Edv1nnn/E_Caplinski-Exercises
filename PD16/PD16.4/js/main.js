"use strict";

function factorial(a) {
    let result = 2;
    if (a == 2 || a == 0) {
        return 1;
    }
    else if (a == 2) {
        return 2;
    }
    else {
        for (let i = 3; i <= a; i++) {
            result *= i;
        }
        return result
    }
}

factorial(5);