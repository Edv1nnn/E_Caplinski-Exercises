"use strict";

const autobusai = [
    { valandos: 1, minutes: 50, keleiviai: 17 },
    { valandos: 2, minutes: 0, keleiviai: 25 }
];

let bendrasKeleiviuSkaicius = 0;

for (let i = 0; i < autobusai.length; i++) {
    bendrasKeleiviuSkaicius += autobusai[i].keleiviai;
}

let bendrasLaikasMinutemis = 0;

for (let i = 0; i < autobusai.length; i++) {
    const laikasMinutemis = autobusai[i].valandos * 60 + autobusai[i].minutes;
    bendrasLaikasMinutemis += laikasMinutemis;
}

const vidutinisLaikasMinutemis = bendrasLaikasMinutemis / autobusai.length;

let maziauNei10 = 0;

for (let i = 0; i < autobusai.length; i++) {
    if (autobusai[i].keleiviai < 10) {
        maziauNei10++;
    }
}
console.log("Bendrai pervežtų keleivių skaičius = " + bendrasKeleiviuSkaicius + ".");
console.log("Vidutinis sugaištas važiavimo laikas (min.): " + vidutinisLaikasMinutemis + ".");
console.log("Autobusų skaičius (keleiviai < 10): " + maziauNei10 + ".");