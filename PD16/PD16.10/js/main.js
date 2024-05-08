"use strict";

function capitalizeFirstLetters(sentence) {
    const words = sentence.split(' ');

    for (let i = 0; i < words.length; i++) {
        words[i] = words[i][0].toUpperCase() + words[i].substr(1).toLowerCase();
    }
    return words.join(' ');
}

const result = capitalizeFirstLetters('Apple, Samsung, Huawei');
console.log(result);
