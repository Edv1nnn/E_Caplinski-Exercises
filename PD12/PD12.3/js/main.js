"use strict";

const wallLength = 4;
const wallHeight = 3;
const brickLength = 0.2;
const brickHeight = 0.1;
const brickPrice = 0.5;

const wallArea = wallLength * wallHeight;
const brickArea = brickLength * brickHeight;
const bricksCount = wallArea / brickArea;

const totalPrice = bricksCount * brickPrice;

console.log(`Number of bricks: ${bricksCount}. Total cost of bricks will be ${totalPrice.toFixed(2)} Eur.`);