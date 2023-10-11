"use strict";

let userNumber = "number";
console.log(userNumber);

let userBigint = "bigint";
console.log(userBigint);

let userString = "string";
console.log(userString);

let userBoolean = "boolean";
console.log(userBoolean);

let userUndefined = "undefined";
console.log(userUndefined);

let userNull = "null";
console.log(userNull);

let userObject = "object";
console.log(userObject);


let number = 12;
console.log("number type is", typeof (number));

let otherNumber = 45.89;
console.log("otherNumber type is", typeof (otherNumber));

let textOne = 'Beautiful JavaScript World';
console.log("textOne type is", typeof (textOne));

let textTwo = "Beautiful JavaScript World";
console.log("textTwo type is", typeof (textTwo));

let textThree = `Beautiful JavaScript World`;
console.log("textThree type is", typeof (textThree));

let isTrue = (true == false);
console.log("isTrue type is", typeof (isTrue));

let isEqual = (2 >= 0);
console.log("isEqual type is", typeof (isEqual));

let petName = undefined;
console.log("petName type is", typeof (petName));

let petAge = null;
console.log("petAge type is", typeof (petAge));

let human = {
    humanName: undefined,
    humanAge: null
};
console.log("human type is", typeof (human));