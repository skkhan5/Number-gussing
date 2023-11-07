import inquirer from "inquirer";
import chalk from "chalk";
const randomNumber = Math.floor(Math.random() * 100) + 1;
// console.log(randomNumber)
let remainingChanges = 6;
function validateNumber(input) {
    const number = parseFloat(input);
    if (isNaN(number)) {
        return "Please enter a valid number";
    }
    if (number < 0 || number > 100) {
        return "Please guess a number 1 to 100";
    }
    return true;
}
async function askForguess() {
    inquirer.prompt([{
            type: 'input',
            name: 'guess',
            message: 'Please enter a number between 1 to 100',
            validate: validateNumber
        }])
        .then((answer) => {
        const guessedNumber = parseInt(answer.guess);
        if (guessedNumber === randomNumber) {
            console.log(chalk.bgBlue.yellow(`congratulations! you guessed the number ${randomNumber}
        correctly`));
            process.exit(0);
        }
        else if (guessedNumber < randomNumber) {
            remainingChanges--;
            console.log(chalk.bgRed.white(`to low, kindly guess again to ramaing chances are left to ${remainingChanges}`));
            if (remainingChanges = 0) {
                console.log((`we are really sorry you have missed all of chances correct number is ${randomNumber}`));
            }
            else
                (askForguess());
        }
        else if (guessedNumber > randomNumber) {
            remainingChanges--;
            console.log(chalk.green.bgRed(`to low, kindly guess again to ramaing chances are left to ${remainingChanges}`));
            if (remainingChanges = 0) {
                console.log((`we are really sorry you have missed all of chances correct number is ${randomNumber}`));
            }
            else {
                askForguess();
            }
        }
    });
}
askForguess();
