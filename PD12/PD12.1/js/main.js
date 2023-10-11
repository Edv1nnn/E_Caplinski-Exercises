"use strict";

const pirmadienis = 5;
const antradienis = 6;
const treciadienis = 4;
const ketvirtadienis = 5;
const penktadienis = 4;

const paskaitosLaikasMin = 45;

const paskaitosPerSavaite = pirmadienis + antradienis + treciadienis + ketvirtadienis + penktadienis;

const paskaitosTrukmeMin = paskaitosPerSavaite * paskaitosLaikasMin;

console.log(`Paskaitų skaičius per savaitę - ${paskaitosPerSavaite}. Tai sudaro ${paskaitosTrukmeMin} minučių.`);