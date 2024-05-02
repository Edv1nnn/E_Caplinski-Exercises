function SukurtasArray(start, end) {
    const resultatasArray = [];
    for (let i = start; i <= end; i++) {
        resultatasArray.push(i);
    }
    return resultatasArray;
}

const Pradzia = 3;
const Pabaiga = 5;
const Zingsnis = SukurtasArray(Pradzia, Pabaiga);

console.log("Array:", Zingsnis);