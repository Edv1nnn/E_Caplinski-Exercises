const Masyvas = [5, 3, 8, 1, 2, 3, 7, 1, 1, 4, 7, 10];
const rezultatas = maziausiasNumeris(Masyvas);

function maziausiasNumeris(masyvas) {
    const specialusMasyvas = [...new Set(masyvas)].sort((a, b) => a - b);
    return specialusMasyvas.length >= 3 ? specialusMasyvas[2] : "Nepakanka";
}

console.log("Trečias mažiausias skaičius yra:", rezultatas);