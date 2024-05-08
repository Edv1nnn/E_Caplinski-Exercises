"use strict";

let line = "JavaScript for all";

let stack = [];

for (let i = 0; i < line.length; i++) {
    stack.push(line[i]);
};

let reversedLine = '';
while (stack.length > 0) {
    reversedLine += stack.pop();
};

console.log(reversedLine);
