"use strict";

let startYear = 1997;
let endYear = 2018;

for (let year = startYear; year <= endYear; year++) {
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        console.log(year);
    };
};
