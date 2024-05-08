"use strict";

const targetElement = document.getElementById("element");

if (targetElement) {
    targetElement.textContent = "Sveiki, aš esu naujas tekstas!";
} else {
    console.log("Element with specified ID not found.");
};
