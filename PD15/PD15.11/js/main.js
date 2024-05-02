function sumaisytiMasyva(masyvas) {
    masyvas.sort(() => Math.random() - 0.5);
}

const masyvas = ["Berniukas", "Mergaitė", "Persikas", "Obuolys"];
sumaisytiMasyva(masyvas);
console.log("Sumaišytas masyvas:", masyvas);