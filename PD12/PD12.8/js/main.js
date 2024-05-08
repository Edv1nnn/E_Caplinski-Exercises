"use strict";

const tankCapacity = 112;
const fuelConsumptionN = 11;

let days = 0;
let remainingFuel = tankCapacity;

while (remainingFuel >= ((days % 2 === 0) ? fuelConsumptionN : 2 * fuelConsumptionN)) {
    remainingFuel -= ((days % 2 === 0) ? fuelConsumptionN : 2 * fuelConsumptionN);
    days++;
}

console.log("You will be able to travel for " + days + " days.");