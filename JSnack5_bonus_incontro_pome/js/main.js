// Dato un array contenente i risultati di una squadra(vittorie, pareggi e sconfitte)[W, W, L, X, X, W, L, X], 
// stampare a video il numero di vittorie, il numero di pareggi ed il numero di sconfitte.


// creiamo l'array 
const risultati = ["W", "W", "L", "X", "X", "W", "L", "X"];

const win = "W";
let win_counter = 0;

const lose = "L";
let lose_counter = 0;

const par = "X";
let par_counter = 0;


for (let i = 0; i < risultati.length; i++) {
    if (risultati[i] === win) {
        win_counter++;
    }
    else if (risultati[i] === lose) {
        lose_counter++;
    }
    else {
        par_counter++
    }
}

console.log(`si è vinto: ${win_counter} volte`);
console.log(`si è perso: ${lose_counter} volte`);
console.log(`si è pareggiato: ${par_counter} volte`);