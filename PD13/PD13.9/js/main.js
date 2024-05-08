"use strict";

function fitsInEnvelope(envelopeLength, envelopeWidth, cardLength, cardWidth) {
    if ((cardLength + 2) <= envelopeLength) {
        if ((cardWidth + 2) <= envelopeWidth) {
            return true;
        }
    }
    return false;
};

let envelopeLength = 20;
let envelopeWidth = 40;

let cardLength = 10;
let cardWidth = 20;

if (fitsInEnvelope(envelopeLength, envelopeWidth, cardLength, cardWidth)) {
    console.log("The card fits in the envelope!");
} else {
    console.log("The card does not fit in the envelope.");
};