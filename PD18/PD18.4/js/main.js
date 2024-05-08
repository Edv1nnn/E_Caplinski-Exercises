"use strict";

const person = {
    name: "Edvin",
    age: 18,
    gender: "Male",
    city: "Vilnius"
};

function printPersonProperties(person) {
    for (let property in person) {
        if (person.hasOwnProperty(property)) {
            console.log(property + ": " + person[property]);
        }
    }
}

printPersonProperties(person);