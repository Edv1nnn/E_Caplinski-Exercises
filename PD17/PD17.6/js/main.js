"use strict";

function deleteFirstElement() {

    const listElement = document.getElementById("list");

    if (listElement.getElementsByTagName("li").length > 0) {
        let firstElement = listElement.getElementsByTagName("li")[0];
        firstElement.parentNode.removeChild(firstElement);
    } else {
        console.log("The list is empty, there is nothing to delete.");
    };
};