"use strict";

let n = 30;
let m = 40;

for (let skaicius = n; skaicius <= m; skaicius++) {
    if (skaicius % 3 === 0 && skaicius % 10 !== 3) {
        console.log(skaicius);
    };
};