console.log("Pari o dispari?");

const userChoice = prompt('Pari o dispari').toLocaleLowerCase()
const userNumber = parseInt(prompt('Scegli un numero da 1 a 5'));

// const pcNumber = Math.round(Math.random() * 5) + 1
function generatePcNumber(min, max) {
    return Math.round(Math.random() * (max - min +1 )) +1
}
const pcNumber = generatePcNumber(1, 5)

console.log(userChoice); console.log(userNumber); console.log(pcNumber);

let sum = userNumber + pcNumber

console.log(sum);

let message = ""
/**
 * From user choice between "pari" o "dispari" and the sum of user number choice and random generated pc number decide if user win or lost
 * 
 * @param {String} userChoice 
 * @param {Number} userNumber 
 * @returns {String}
 */
function gameEvenOrOdd(userChoice, userNumber) {
    if (sum % 2 == 0 && userChoice == 'pari') {
        return message = 'You win!'
    } else if (sum % 2 != 0 && userChoice == 'dispari') {
        return message = 'You win!';
    } else {
        return message = 'You lost!';
    }

}

console.log(gameEvenOrOdd(userChoice, userNumber));
alert(gameEvenOrOdd(userChoice, userNumber))