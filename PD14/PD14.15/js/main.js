"use strict";

let startNumber = 222;
let endNumber = 245;

for (let ticket = startNumber; ticket <= endNumber; ticket++) {
    if (ticket % 3 === 0) {
        let ticketText = ticket.toString();
        if (ticketText.includes('3') || ticketText.includes('6') || ticketText.includes('9')) {
            console.log(ticket);
        }
    };
};
