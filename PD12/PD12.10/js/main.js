"use strict";

const p = 5;
const pz = 50;
const a = 3;
const az = 45;
const k = 3;
const t = 5;

const distancija = (p * k * pz + a * k * az) / 100;
const metrai = distancija | 0;
const centimetrai = ((distancija - metrai) * 100) | 0;

const greitis = distancija / t;

console.log(`${metrai} ${centimetrai} ${greitis.toFixed(2)}`);