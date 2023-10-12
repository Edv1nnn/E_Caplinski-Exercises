"use strict";

const automobilioGreitis = 60;
const tunelioIlgis = 264;

const greitisMs = automobilioGreitis * 1000 / 3600;

const laikasSekundemis = tunelioIlgis /greitisMs;

console.log(`Automobilis tunelį pravažiuos per ${laikasSekundemis.toFixed(2)} s`);