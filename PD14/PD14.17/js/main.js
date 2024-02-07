"use strict";

let skaicius = 5;
let rasti = 0;

while (rasti < 10) {
    let kvadratas = skaicius * skaicius;
    let skaiciusTekstas = kvadratas.toString();

    let atvirksciai = skaiciusTekstas.split('').reverse().join('');

    if (skaiciusTekstas === atvirksciai) {
        console.log(skaicius, kvadratas);
        rasti++;
    }

    skaicius++;
};