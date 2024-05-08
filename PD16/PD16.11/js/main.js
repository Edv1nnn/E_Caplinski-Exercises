"use strict";

function longestWord(sentence) {
    let words = sentence.split(" ");
    let longestLength = 0;
    let longestWord = null;
    for (let i = 0; i < words.length; i++) {
        if (longestLength < words[i].length) {
            longestLength = words[i].length;
            longestWord = words[i];
        }
    }
    return longestWord;
}

const result = longestWord("Labas Edvinas");
console.log(result);
