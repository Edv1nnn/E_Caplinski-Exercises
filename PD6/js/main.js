"use strict";

let funnyNumber = 12345;
let convertFunnyNumberToString = String(funnyNumber);
console.log(typeof convertFunnyNumberToString);

let funnyString = "12345";
let convertFunnyStringToNumber = Number(funnyString);
console.log(typeof convertFunnyStringToNumber);

let funnyTrue = "1";
let convertFunnyTrueToBoolean = Boolean(funnyTrue);
console.log(typeof convertFunnyTrueToBoolean);

let funnyFalse = '0';
let convertFunnyFalseToBoolean = Boolean(funnyFalse);
console.log(typeof convertFunnyFalseToBoolean);

let isTrue = false;
let convertIsTrueToString = String(isTrue);
console.log(typeof convertIsTrueToString);

let funnyText = "JavaScript is dynamic programming language.";
console.log(typeof funnyText);

let funnyNull = null;
let convertFunnyNullToString = String(funnyNull);
console.log(typeof convertFunnyNullToString);

let funnyUndefined = undefined;
let convertFunnyUndefinedToString = String(funnyUndefined);
console.log(typeof convertFunnyUndefinedToString);

let isTruee = true;
let convertIsTrueeToString = String(isTruee);
console.log(typeof convertIsTrueeToString);

let isFalsee = false;
let convertIsFalseeToString = String(isFalsee);
console.log(typeof convertIsFalseeToString);

let booleanString = "true";
let convertBooleanStringToNumber = Number(booleanString);
console.log(typeof convertBooleanStringToNumber);

let otherBooleanString = "false";
let convertOtherBooleanStringToBoolean = Boolean(otherBooleanString);
console.log(typeof convertOtherBooleanStringToBoolean);