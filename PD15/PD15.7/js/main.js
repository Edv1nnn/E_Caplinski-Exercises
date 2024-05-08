"use strict";

function swapCase(str) {
  let result = '';
  for (let i = 0; i < str.length; i++) {
    if (/[A-Z]/.test(str[i])) {
      result += str[i].toLowerCase();
    } else {
      result += str[i].toUpperCase();
    }
  }
  return result;
}

let array = ['NAmAs', 'Saule', 'MaSina', 'KoMpiUteRis'];

for (let i = 0; i < array.length; i++) {
  array[i] = swapCase(array[i]);
}

console.log(array);
