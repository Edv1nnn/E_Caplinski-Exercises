"use strict";

function wordGenerator(prefix, newWord) {
    let result = [];
    let length = newWord.length;
    for (let i = 0; i < length; i++) {
        let newPrefix = prefix + newWord[i];
        result.push(newPrefix);
        if (newWord.slice(i + 1).length > 0) {
            result = result.concat(wordGenerator(newPrefix, newWord.slice(i + 1)));
        } else {
            result.push(newPrefix + newWord.slice(i + 1));
        }
    }
    return result;
}

const newArray = wordGenerator('', 'cat');
console.log(newArray);
