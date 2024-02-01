"use strict";

const buttonBackground = document.getElementById("changeBackground");

buttonBackground.addEventListener("click", function () {
    const staticColor = "red";
    document.body.style.backgroundColor = staticColor;
});