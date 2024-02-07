"use strict";

let atlyginimai = [824.25, 1225.12, 459.16, 1500];
let naujiAtlyginimai = [];

for (let i = 0; i < atlyginimai.length; i++) {
    let esamasAtlyginimas = atlyginimai[i];
    let naujasAtlyginimas = esamasAtlyginimas > 1000
        ? (esamasAtlyginimas * 1.05).toFixed(2)
        : (esamasAtlyginimas * 1.1).toFixed(2);

    naujiAtlyginimai.push(naujasAtlyginimas);
};

console.log("Atlyginimas pries:", atlyginimai.join(", "));
console.log("Atlyginimas po:", naujiAtlyginimai.join(", "));
