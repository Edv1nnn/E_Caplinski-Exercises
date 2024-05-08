"use strict";

function uniqueLetters(text) {
    let unique = "";
    for (let i = 0; i < text.length; i++) {
        if (!unique.includes(text[i])) {
            unique += text[i];
        }
    }
    return unique.split('').sort().join('');
}

console.log(uniqueLetters("Edvinas"));
console.log(uniqueLetters("Edvinas is happy if the code works"));
