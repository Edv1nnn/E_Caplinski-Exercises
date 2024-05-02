const Masyvas = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function RandomMasyvas(array) {
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
}

const RandomElementas = RandomMasyvas(Masyvas);
console.log("Random:", RandomElementas);