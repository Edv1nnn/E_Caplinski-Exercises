"use strict";

const sienosIlgis = 4;
const sienosAukstis = 3;
const plytosIlgis = 0.2;
const plytosAukstis = 0.1;
const plytosKaina = 0.5;

const sienosPlotas = sienosIlgis * sienosAukstis;
const plytosPlotas = plytosIlgis * plytosAukstis;
const plytuSkaicius = sienosPlotas / plytosPlotas;

const kaina = plytuSkaicius * plytosKaina;

console.log(` Plytų kiekis ${plytuSkaicius}. Plytos kainuos ${kaina.toFixed(2)} Eur.`);