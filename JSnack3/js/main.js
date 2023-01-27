// Crea un array di numeri interi e fai la somma di tutti gli elementi  che sono in posizione dispari

// creiamo l'arrey 

let numeri = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1333, 12, 13, 14, 15, 16, 17, 18, 19, 20];
// contenitore della somma 
let somma_dispari = 0;


for (let i = 0; i < numeri.length; i++) {
    // se il numero diviso per 2 da un resto diverso da zero
    if (numeri[i] % 2 != 0) {
        // somma quel numero
        somma_dispari = somma_dispari + numeri[i]
        console.log(somma_dispari)
    }
}

// la somma dei numeri dispari è 
document.getElementById("result").innerHTML = (`La somma dei numeri dispari è : ${somma_dispari}`);