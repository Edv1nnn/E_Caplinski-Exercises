"use strict";

const egluciuSkaicius = 6;
const egluciuAukstis = [167, 134, 145, 156, 155, 176];

let suma = 0;
for (let i = 0; i < egluciuSkaicius; i++) {
  suma += egluciuAukstis[i];
}

const vidutinisAukstis = suma / egluciuSkaicius;

console.log(`Eglutės aukščio vidurkis: ${vidutinisAukstis.toFixed(2)} cm.`);