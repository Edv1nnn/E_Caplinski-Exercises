"use strict";

function shuffleArray(array) {
    array.sort(() => Math.random() - 0.5);
}

const array = ["Boy", "Girl", "Peach", "Apple"];
shuffleArray(array);
console.log("Shuffled array:", array);
