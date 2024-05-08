"use strict";

const initialFishCount = 5;
const fishAddedPerDay = 3;
const numberOfDays = 3;

const totalFishCount = initialFishCount + (fishAddedPerDay * numberOfDays);

console.log(`After ${numberOfDays} days, there will be ${totalFishCount} fish in the aquarium.`);