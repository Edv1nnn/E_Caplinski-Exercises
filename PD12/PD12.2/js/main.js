"use strict";

const puodeliuSkaicius = 7;

const dezesTalpumas = 3;

const pilnosDezes = Math.floor(puodeliuSkaicius / dezesTalpumas);

const likusiosPuodeliai = puodeliuSkaicius % dezesTalpumas;

console.log(`Pilnų dėžučių skaičius: ${pilnosDezes}. Nesupakuotų puodelių skaičius: ${likusiosPuodeliai}.`);