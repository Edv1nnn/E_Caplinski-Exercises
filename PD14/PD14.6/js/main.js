"use strict";

let eilute = "JavaScript for all";

let stack = [];

for (let i = 0; i < eilute.length; i++) {
    stack.push(eilute[i]);
};

let atvirksciaiEilute = '';
while (stack.length > 0) {
    atvirksciaiEilute += stack.pop();
};

console.log(atvirksciaiEilute);