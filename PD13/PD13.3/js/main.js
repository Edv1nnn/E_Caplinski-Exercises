"use strict";

const x = 2;
const y = -2;
const z = 4;

let maziausias, vidurinis, didziausias;

if (x <= y && x <= z) {
    maziausias = x;
    vidurinis = (y <= z) ? y : z;
    didziausias = (y > z) ? y : z;
}

else if (y <= x && y <= z) {
    maziausias = y;
    vidurinis = (x <= z) ? x : z;
    didziausias = (x > z) ? x : z;
}

else {
    maziausias = z;
    vidurinis = (x <= y) ? x : y;
    didziausias = (x > y) ? x : y;
}

console.log("Rezultatas: " + maziausias + ", " + vidurinis + ", " + didziausias);