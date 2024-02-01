"use strict";

const container = document.getElementById("container");
const containerElements = container.children;

console.log("Child elements in the parent div:");

for (let i = 0; i < containerElements.length; i++) {
    console.log(containerElements[i]);
};