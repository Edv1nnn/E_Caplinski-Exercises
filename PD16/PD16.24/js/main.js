"use strict";

function calculateBMI(weight, height) {
    const bmi = weight / (height * height);
    return bmi;
}

function interpretedBMI(bmi) {
    if (bmi < 18.5) {
        return "You are underweight, go get some weight";
    } else if (bmi >= 18.5 && bmi < 25) {
        return "You are normal weight, good job you can be proud of yourself";
    } else if (bmi >= 25 && bmi < 30) {
        return "You are overweight, better lose some weight by working out or eating healthy";
    } else {
        return "You are obese, seriuosly go workout this is no joke anymore";
    }
}
const weight = 130;
const height = 1.70;

const bmi = calculateBMI(weight, height);
const results = interpretedBMI(bmi);

console.log(`BMI: ${bmi.toFixed(2)}`);
console.log(`Results: ${results}`);