"use strict";

for (let sveikasisSkaicius = 1; sveikasisSkaicius <= 300; sveikasisSkaicius++) {
    let dalikliuSkaicius = 0;

    for (let daliklis = 1; daliklis <= sveikasisSkaicius; daliklis++) {
        if (sveikasisSkaicius % daliklis === 0) {
            dalikliuSkaicius++;
        }
    };

    if (dalikliuSkaicius === 5) {
        console.log(sveikasisSkaicius);
    };
};