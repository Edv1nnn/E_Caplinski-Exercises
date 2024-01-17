let array = [1, 2, 3, 4, 2, 5, 2, 6];
let searchElement = 2;
let elementcounter = 0;

for (let i = 0; i < array.length; i++) {
    if (array[i] === searchElement)
        elementcounter++
};

console.log("Elementas " + searchElement + " pasikartojo " + elementcounter + " kartus.");