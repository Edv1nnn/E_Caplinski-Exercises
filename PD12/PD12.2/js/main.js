"use strict";

const cupsCount = 7;

const boxCapacity = 3;

const fullBoxes = Math.floor(cupsCount / boxCapacity);

const remainingCups = cupsCount % boxCapacity;

console.log(`Number of full boxes: ${fullBoxes}. Number of remaining cups: ${remainingCups}.`);