console.log("Pari o dispari?");
const userChoice = prompt('Pari o dispari').toLocaleLowerCase()
const userNumber = parseInt(prompt('Scegli un numero da 1 a 5'));

const pcNumber = Math.round(Math.random() * 5) + 1

console.log(userChoice);
console.log(userNumber);
console.log(pcNumber);

let sum = userNumber + pcNumber

console.log(sum);

let message = ""

function gameEvenOrOdd(userChoice, userNumber) {
    if (sum % 2 == 0 && userChoice == 'pari') {
        return message = 'You win!'
    } else if (sum % 2 != 0 && userChoice == 'dispari') {
        return message = 'You win!';
    } else {
        return message = 'You lost!';
    }

}

alert(gameEvenOrOdd(userChoice, userNumber))