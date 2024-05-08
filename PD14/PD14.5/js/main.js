"use strict";

let salaries = [824.25, 1225.12, 459.16, 1500];
let newSalaries = [];

for (let i = 0; i < salaries.length; i++) {
    let currentSalary = salaries[i];
    let newSalary = currentSalary > 1000
        ? (currentSalary * 1.05).toFixed(2)
        : (currentSalary * 1.1).toFixed(2);

    newSalaries.push(newSalary);
};

console.log("Salaries before:", salaries.join(", "));
console.log("Salaries after:", newSalaries.join(", "));

