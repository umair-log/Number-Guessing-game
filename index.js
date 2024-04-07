#!/usr/bin/env node
import inquirer from "inquirer";
//  1) Computer will generate a random number.
//  2) User input for guessing number.
//  3) Compare user input with computer generated number and show result.
let random = Math.floor(Math.random() * 6 + 1);
console.log(random);
const answer = await inquirer.prompt([
    { message: "Guess a number from 1 to 6", type: "number", name: "number" },
]);
console.log(answer.number);
if (answer.number > 0 && answer.number < 7) {
    if (answer.number === random) {
        console.log("Congrates you win");
    }
    else {
        console.log('Better luck next time');
    }
}
else {
    console.log("Please try to guess a valid number");
}
