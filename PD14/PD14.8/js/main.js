"use strict";

let i = 0;
while (i <= 10) {
    let j = 0;
    let line = '';
    while (j <= 10) {
        line += `${i * j}\t`;
        j++;
    }
    console.log(line);
    i++;
};