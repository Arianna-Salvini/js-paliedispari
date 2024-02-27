console.log('Pari o dispari?');

// - Step 1: Chiedere all’utente di inserire una parola 
//     - Creare una variabile per la parola dell'utente
//         - Usare prompt per l'inserimento

//      - Creare un array contenente i caratteri della parola inserita
//         - Usare .split per scomporre la parola in caratteri
//         - Creare un secondo array coi caratteri della parola inserita al contrario con .reverse
//             - .join per creare il secondo array
    
//     - Verificare se la parola è palindroma
//         - SE i caretteri della parola e i caratteri invertiti sono uguali la parola è pallindroma
//             - Mssaggio appropriato
//         - ALTRIMENTI la parola non è palindroma
//             - Messaggio appropriato

// const userWord = prompt("Inserisci una parola per scoprire se è palindroma")
// console.log(userWord);

const userWord = "pera";

const digit = userWord.split("");
console.log(digit);

const digitBackward = digit.toReversed();

console.log(digitBackward);
// let digitBackwards = []
// console.log(digitBackwards);
