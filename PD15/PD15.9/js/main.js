function skaiciuotiSuma(skaiciai) {
    let suma = 0;
    for (let i = 0; i < skaiciai.length; i++) {
        suma += skaiciai[i];
    }
    return suma;
}

function skaiciuotiSandauga(skaiciai) {
    let sandauga = 1;
    for (let i = 0; i < skaiciai.length; i++) {
        sandauga *= skaiciai[i];
    }
    return sandauga;
}

let skaiciai = [2, 4, 6, 8, 10];

let suma = skaiciuotiSuma(skaiciai);
let sandauga = skaiciuotiSandauga(skaiciai);

console.log("Suma:", suma);
console.log("Sandauga:", sandauga);