"use strict";

const bakasTalpa = 112;
const kuroSanaudosN = 11;

let dienos = 0;
let likoDegalu = bakasTalpa;

while (likoDegalu >= ((dienos % 2 === 0) ? kuroSanaudosN : 2 * kuroSanaudosN)) {
    likoDegalu -= ((dienos % 2 === 0) ? kuroSanaudosN : 2 * kuroSanaudosN);
    dienos++;
}

console.log("Keliauti bus galima " + dienos + " dienas");