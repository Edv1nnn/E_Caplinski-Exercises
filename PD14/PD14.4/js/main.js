"use strict";

let january = [-11.5, -10.3, -12, -6.5, -5, -15.5];
let february = [-16, -14.5, -11, -10.3, -3.5, 0];
let march = [-3, -2.5, 0, 5, 9.5, 11.2];

let sumJanuary = 0;
for (let i = 0; i < january.length; i++) {
    sumJanuary += january[i];
};

let sumFebruary = 0;
for (let i = 0; i < february.length; i++) {
    sumFebruary += february[i];
};

let sumMarch = 0;
for (let i = 0; i < march.length; i++) {
    sumMarch += march[i];
};

let averageJanuaryTemperature = sumJanuary / january.length;
let averageFebruaryTemperature = sumFebruary / february.length;
let averageMarchTemperature = sumMarch / march.length;

let overallAverage = (averageJanuaryTemperature + averageFebruaryTemperature + averageMarchTemperature) / 3;

console.log(`Average temperature in January: ${averageJanuaryTemperature.toFixed(2)}.`);
console.log(`Average temperature in February: ${averageFebruaryTemperature.toFixed(2)}.`);
console.log(`Average temperature in March: ${averageMarchTemperature.toFixed(2)}.`);
console.log(`Overall average of measurements taken: ${overallAverage.toFixed(2)}.`);
