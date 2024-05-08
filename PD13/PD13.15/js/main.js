"use strict";

function calculatePriceWithDiscount(t, p) {
    let priceWithDiscount = t * (1 - p / 100);
    return priceWithDiscount;
};

function isEnoughMoney(savedMoney, priceWithDiscount) {
    return savedMoney >= priceWithDiscount;
};

let phonePrice = 450;
let discountPercentage = 15;
let savedMoney = 500;

let priceWithDiscount = calculatePriceWithDiscount(phonePrice, discountPercentage);
console.log(`The smartphone with a ${discountPercentage}% discount will cost ${priceWithDiscount.toFixed(2)} euros.`);

let enoughMoney = isEnoughMoney(savedMoney, priceWithDiscount);
console.log(`Austeja's saved money ${enoughMoney ? 'is enough' : 'is not enough'} to buy the smartphone.`);
