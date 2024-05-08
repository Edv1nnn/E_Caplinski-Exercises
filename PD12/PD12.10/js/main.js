"use strict";

const p = 5;
const pz = 50;
const a = 3;
const az = 45;
const k = 3;
const t = 5;

const distance = (p * k * pz + a * k * az) / 100;
const meters = Math.floor(distance);
const centimeters = Math.floor((distance - meters) * 100);

const speed = distance / t;

console.log(`${meters}m ${centimeters}cm ${speed.toFixed(2)}km/h`);
