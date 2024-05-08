"use strict";

const buses = [
    { hours: 1, minutes: 50, passengers: 17 },
    { hours: 2, minutes: 0, passengers: 25 }
];

let totalPassengers = 0;

for (let i = 0; i < buses.length; i++) {
    totalPassengers += buses[i].passengers;
}

let totalMinutes = 0;

for (let i = 0; i < buses.length; i++) {
    const timeInMinutes = buses[i].hours * 60 + buses[i].minutes;
    totalMinutes += timeInMinutes;
}

const averageTimeMinutes = totalMinutes / buses.length;

let lessThan10 = 0;

for (let i = 0; i < buses.length; i++) {
    if (buses[i].passengers < 10) {
        lessThan10++;
    }
}

console.log("Total passengers transported: " + totalPassengers + ".");
console.log("Average time spent traveling (min.): " + averageTimeMinutes + ".");
console.log("Number of buses (passengers < 10): " + lessThan10 + ".");
