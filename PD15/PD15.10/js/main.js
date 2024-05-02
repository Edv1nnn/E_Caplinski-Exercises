const masyvas = ["Obuolys", "Bananas", "Persikas", "Obuolys", "Apelsinas"];

function pasalintiDublikatus(data) {
    return Array.from(new Set(data));
}

console.log(pasalintiDublikatus(masyvas));