"use strict";

let sausis = [-11.5, -10.3, -12, -6.5, -5, -15.5];
let vasaris = [-16, -14.5, -11, -10.3, -3.5, 0];
let kovas = [-3, -2.5, 0, 5, 9.5, 11.2];

let sumaSausio = 0;
for (let i = 0; i < sausis.length; i++) {
    sumaSausio += sausis[i];
};

let sumaVasario = 0;
for (let i = 0; i < vasaris.length; i++) {
    sumaVasario += vasaris[i];
};

let sumaKovo = 0;
for (let i = 0; i < kovas.length; i++) {
    sumaKovo += kovas[i];
};

let vidutineSausioTemperatura = sumaSausio / sausis.length;
let vidutineVasarioTemperatura = sumaVasario / vasaris.length;
let vidutineKovoTemperatura = sumaKovo / kovas.length;

let bendrasVidurkis = (vidutineSausioTemperatura + vidutineVasarioTemperatura + vidutineKovoTemperatura) / 3;

console.log(`Vidutinė sausio temperatūra: ${vidutineSausioTemperatura.toFixed(2)}.`);
console.log(`Vidutinė vasario temperatūra: ${vidutineVasarioTemperatura.toFixed(2)}.`);
console.log(`Vidutinė kovo temperatūra: ${vidutineKovoTemperatura.toFixed(2)}.`);
console.log(`Bendras atliktų matavimų vidurkis: ${bendrasVidurkis.toFixed(2)}.`);