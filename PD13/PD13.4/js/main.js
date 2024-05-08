"use strict";

let a = -6;
let b = 1;
let c = 185;

let discriminant = b * b - 4 * a * c;

if (discriminant > 0) {
  let x1 = (-b + Math.sqrt(discriminant)) / (2 * a);
  let x2 = (-b - Math.sqrt(discriminant)) / (2 * a);
  x1 = x1.toFixed(2);
  x2 = x2.toFixed(2);
  console.log("The equation has two distinct solutions: x1 = " + x1 + ", x2 = " + x2);
} else if (discriminant === 0) {
  let x = -b / (2 * a);
  x = x.toFixed(2);
  console.log("The equation has two identical solutions: x = " + x);
} else {
  console.log("The equation has no real solutions within the set of real numbers.");
}