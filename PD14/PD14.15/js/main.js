"use strict";

let s1 = 222;
let s2 = 245;

for (let bilietas = s1; bilietas <= s2; bilietas++) {
    if (bilietas % 3 === 0) {
        let bilietoTekstas = bilietas.toString();
        if (bilietoTekstas.includes('3') || bilietoTekstas.includes('6') || bilietoTekstas.includes('9')) {
            console.log(bilietas);
        }
    };
};