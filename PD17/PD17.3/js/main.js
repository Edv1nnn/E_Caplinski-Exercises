"use strict";

const changeBackgroundButton = document.getElementById("changeBackground");

changeBackgroundButton.addEventListener("click", function () {
    const staticColor = "red";
    document.body.style.backgroundColor = staticColor;
});
