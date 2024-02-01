"use strict";

document.getElementById("formButton").addEventListener("click", function () {
    const enteredText = document.getElementById("textBox").value.trim();
    const messageElement = document.getElementById("message");

    if (enteredText !== '') {
        messageElement.textContent = "The text you entered: " + enteredText;
    } else {
        messageElement.textContent = "Enter text before displaying the message.";
    };
});