"use strict";

const dalyvavoBegiku = 4;
const begikuLaikai = [22, 20, 25, 25];

let sumaLaiku = 0;
for (let i = 0; i < dalyvavoBegiku; i++) {
  sumaLaiku += begikuLaikai[i];
}
const vidutinisLaikas = sumaLaiku / dalyvavoBegiku;

let greičiausioLaikas = Infinity;
let keliomisSekundemisGreitesnis = 0;

for (let i = 0; i < dalyvavoBegiku; i++) {
  if (begikuLaikai[i] < greičiausioLaikas) {
    greičiausioLaikas = begikuLaikai[i];
    keliomisSekundemisGreitesnis = (vidutinisLaikas - greičiausioLaikas).toFixed(2);
  }
}

console.log(`Greičiausio bėgiko laikas ${greičiausioLaikas} sek.. Jis buvo: ${keliomisSekundemisGreitesnis} sek geresnis už vidurkį.`);