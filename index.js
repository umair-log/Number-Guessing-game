#!/usr/bin/env node
import inquirer from "inquirer";
let random = Math.floor(Math.random() * 6 + 1);
// console.log(random);
async function start() {
    console.log(' \n');
    const menu = await inquirer.prompt([
        { message: "Menu", type: "list", name: "option", choices: [
                "Start Game", "End Game"
            ] },
    ]);
    if (menu.option === "Start Game") {
        // game logic
        console.log(' \n');
        const answer = await inquirer.prompt([
            { message: "Guess a number from 1 to 6", type: "number", name: "number" },
        ]);
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
        start();
        // game end block
    }
    else {
        console.log('Bye .....');
    }
}
start();
