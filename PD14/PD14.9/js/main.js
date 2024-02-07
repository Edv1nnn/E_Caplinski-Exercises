"use strict";

let ląstelės = 1;

let = laikoIntervalas = 3;

let = laikoTarpai = [3, 6, 9, 12, 15, 18, 21, 24];

for (let laikas = 0; laikas <= 24; laikas++) {
    if (laikoTarpai.includes(laikas)) {
        console.log(`Po ${laikas} valandų bus ${ląstelės} ląstelės.`);
    };
    if (laikas % laikoIntervalas === 0) {
        ląstelės *= 2;
    };
};