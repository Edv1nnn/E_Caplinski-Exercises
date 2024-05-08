"use strict";

let cells = 1;

let timeInterval = 3;

let timePoints = [3, 6, 9, 12, 15, 18, 21, 24];

for (let time = 0; time <= 24; time++) {
    if (timePoints.includes(time)) {
        console.log(`After ${time} hours, there will be ${cells} cells.`);
    };
    if (time % timeInterval === 0) {
        cells *= 2;
    };
};
