"use strict";

const startObject = {
    String1: 1,
    String2: 14,
    String3: 2,
    String4: 30
};
function unlockedObjects(object) {
    const newObject = {};

    for (const String in object) {
        if (object[String] > 10) {
            newObject[String] = object[String];
        }
    }

    return newObject;
}


const newObject = unlockedObjects(startObject);
console.log(newObject);