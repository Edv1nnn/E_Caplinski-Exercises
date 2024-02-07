"use strict";

let a = 96;
let z = 103;

let k = 0;

for (let numeris = a; numeris <= z; numeris++) {
    let numerioTekstas = numeris.toString();
    k += numerioTekstas.length;
};

console.log(`ploksteliu reikes = ${k}`);