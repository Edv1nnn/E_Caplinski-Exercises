"use strict";

const carSpeed = 60;
const tunnelLength = 264;

const speedMs = carSpeed * 1000 / 3600;

const timeInSeconds = tunnelLength / speedMs;

console.log(`The car will pass through the tunnel in ${timeInSeconds.toFixed(2)} seconds.`);