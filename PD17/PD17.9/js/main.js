"use strict";

function myElementClass(className) {
    const elements = document.querySelectorAll("." + className);
    elements.forEach(function (element) {
        console.log(element);
    });
};

myElementClass("myElement");