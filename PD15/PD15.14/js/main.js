const Masyvas1 = [10, 20, 10, 4, 1, 2, 3];
const Masyvas2 = [1, 4, 6, 2, 4];

function sujungtiIrPašalintiDublikatus(masyvas1, masyvas2) {
    return [...new Set(masyvas1.concat(masyvas2))];
}

const Sujungtas = sujungtiIrPašalintiDublikatus(Masyvas1, Masyvas2);
console.log(Sujungtas);