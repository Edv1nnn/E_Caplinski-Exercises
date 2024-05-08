"use strict";

const numberOfRunners = 4;
const runnerTimes = [22, 20, 25, 25];

let sumOfTimes = 0;
for (let i = 0; i < numberOfRunners; i++) {
  sumOfTimes += runnerTimes[i];
}
const averageTime = sumOfTimes / numberOfRunners;

let fastestTime = Infinity;
let fasterBySeconds = 0;

for (let i = 0; i < numberOfRunners; i++) {
  if (runnerTimes[i] < fastestTime) {
    fastestTime = runnerTimes[i];
    fasterBySeconds = (averageTime - fastestTime).toFixed(2);
  }
}

console.log(`Fastest runner's time ${fastestTime} sec. They were ${fasterBySeconds} sec faster than the average.`);
