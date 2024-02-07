"use strict";

let a = 5;
let pirminis = a > 1;

for (let daliklis = 2; daliklis < a; daliklis++){
    if (a % daliklis ===0) {
        pirminis = false;
        break
    };
};

console.log(`${a} ${pirminis ? `yra` : `nėra`} pirminis skaicius.`);