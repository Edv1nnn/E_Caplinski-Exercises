"use strict";

function guessNumber() {
    const secretNumber = Math.floor(Math.random() * 10) + 1;
    for (let i = 0; i < 1; i++) {
        const guess = parseInt(prompt("Guess a number from 1 to 10"));
        if (guess === secretNumber) return alert("Congrats! You guessed the number and your reward for it is nothing! woo")
    }
    alert(`Sorry! the answer was ${secretNumber}. Next time try harder at guessing ;)`);
}

guessNumber();