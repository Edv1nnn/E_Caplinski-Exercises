"use strict";

function calculatePrice(p1, p2, p, s) {

    let discount1 = p1 * (p / 100);
    let discount2 = p2 * (p / 100);

    let price1 = p1 - discount1;
    let price2 = p2 - discount2;

    if (price1 + price2 <= s) {
        let totalPrice = price1 + price2;
        return `The buyer will have enough money. Both items will cost ${totalPrice.toFixed(2)} euros.`;
    } else {
        return "The buyer will not have enough money.";
    };
};

let price1 = 30;
let price2 = 20;
let discountPercentage = 10;
let purchaseLimit = 45;

let result = calculatePrice(price1, price2, discountPercentage, purchaseLimit);
console.log(result);
