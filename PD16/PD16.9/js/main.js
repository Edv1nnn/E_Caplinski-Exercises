"use strict";

function sortCharacters(text) {
    return text.split('').sort().join('');
}

const result = sortCharacters('edvinas');
console.log(result);
