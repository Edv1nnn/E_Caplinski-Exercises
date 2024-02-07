"use strict";

function isDivisibleIfThen(a, b) {
    if (b === 0) {
        console.log("Dalyba iš nulio negalima.");
    } else if (a % b === 0) {
        console.log(`${a} dalijasi iš ${b} be liekanos.`);
    } else {
        console.log(`${a} nedalijasi iš ${b} be liekanos.`);
    };
};

function isDivisibleIfThenElse(a, b) {
    if (b === 0) {
        console.log("Dalyba iš nulio negalima.");
    } else {
        if (a % b === 0) {
            console.log(`${a} dalijasi iš ${b} be liekanos.`);
        } else {
            console.log(`${a} nedalijasi iš ${b} be liekanos.`);
        }
    };
};

function isDivisibleSwitch(a, b) {
    if (b === 0) {
        console.log("Dalyba iš nulio negalima.");
    } else {
        switch (a % b) {
            case 0:
                console.log(`${a} dalijasi iš ${b} be liekanos.`);
                break;
            default:
                console.log(`${a} nedalijasi iš ${b} be liekanos.`);
        }
    };
};

console.log(isDivisibleIfThen);