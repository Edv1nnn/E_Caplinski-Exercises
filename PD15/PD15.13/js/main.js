const mas = [5, 6, 1, 4, 9];
const masy = [10, 20, 3, 13];

function Skirtumas(mas, masy) {
    const skirtumas = new Set([...mas, ...masy]);
    mas.forEach(element => skirtumas.delete(element));
    masy.forEach(element => skirtumas.delete(element));
    return Array.from(skirtumas);
}

const skirtumoResultatas = Skirtumas(mas, masy);
console.log("Skirtumas:", skirtumoResultatas);