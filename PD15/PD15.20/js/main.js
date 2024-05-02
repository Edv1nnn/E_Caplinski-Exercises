const Masyvas = [NaN, 1, 2, NaN, 5, 6];
const nurodoSuNaN = rastiNaN(Masyvas);

function rastiNaN(masyvas) {
    const indeksaiSuNaN = [];

    masyvas.forEach((element, index) => {
        if (isNaN(element)) {
            indeksaiSuNaN.push(index);
        }
    });

    return indeksaiSuNaN;
}

console.log("Indeksai su NaN:", nurodoSuNaN);