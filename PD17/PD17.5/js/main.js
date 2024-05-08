"use strict";

const parentContainer = document.getElementById("container");
const childElements = parentContainer.children;

console.log("Child elements in the parent div:");

for (let i = 0; i < childElements.length; i++) {
    console.log(childElements[i]);
}
