"use strict";

let n = 3;
let patientTimes = [18, 10, 10];

let totalDuration = 0;
let longVisits = 0;

for (let i = 0; i < n; i++) {
    let visitTime = patientTimes[i];
    totalDuration += visitTime;
    if (visitTime > 20) {
        longVisits++;
    }
}

let averageTime = totalDuration / n;

console.log(`m = ${averageTime.toFixed(1)}, k = ${longVisits}`);
