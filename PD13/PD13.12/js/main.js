"use strict";

function howManyTimesDriverWillGo(n, m) {

    let times = Math.ceil(n / m);
    return times;
};

let boxes = 35;
let carCapacity = 10;

let timesToGo = howManyTimesDriverWillGo(boxes, carCapacity);
console.log(`The driver will have to go to the warehouse ${timesToGo} times.`);
