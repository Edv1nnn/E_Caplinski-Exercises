"use strict";

function greetings(name, callback) {
    console.log(`Hi` + ' ' + name);
    callback();
}

function callMe() {
    console.log('Oh Really!!!!!!!!!!!');
}

greetings('Edvinas', callMe);