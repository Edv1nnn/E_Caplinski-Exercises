"use strict";

const myElement = document.getElementById("element");

if (myElement) {
    myElement.textContent = "Sveiki, aš esu naujas tekstas!";
} else {
    console.log("Item with specified ID not found.");
};