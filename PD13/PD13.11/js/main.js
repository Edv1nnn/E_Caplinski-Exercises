"use strict";

function checkLoanConditions(fatherSalary, motherSalary, k, n, s) {

    let familyIncome = fatherSalary + motherSalary;

    if (familyIncome / n >= s && familyIncome - k >= 0) {
        return "The bank will grant the loan";
    } else {
        return "The bank will not grant the loan";
    };
};

let fatherSalary = 4000;
let motherSalary = 2500;
let k = 4000;
let n = 2;
let s = 3000;

let result = checkLoanConditions(fatherSalary, motherSalary, k, n, s);
console.log(result);
