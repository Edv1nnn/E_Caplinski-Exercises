const mas = [5, 6, 1, 4, 9];
const masy = [10, 20, 3, 13];

function masskaiciuokle(mas, masy) {
    return [...new Set([...mas, ...masy])];
}

const BothResult = masskaiciuokle(mas, masy);

console.log(BothResult);