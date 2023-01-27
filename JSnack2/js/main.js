// Crea due tag div con due id diversi.Un div avrà il testo colorato di rosso mentre l’altro di verde.
// Partendo da un array di numeri, stampiamo nell’id rosso i numeri dispari e in verde i numeri pari.


// creiamo l'arrey 

let numeri = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
console.log(numeri)

// array per numeri pari 
let numeri_pari = [];

// array per numeri dispari
let numeri_dispari = [];


for (let i = 0; i < numeri.length; i++) {


    if (numeri[i] % 2 == 0) {

        numeri_pari.push(numeri[i]);
        console.log(numeri_pari[i]);
    }
    else {

        numeri_dispari.push(numeri[i]);
        console.log(numeri_dispari[i]);
    }

    document.getElementById("pari").innerHTML = (`numeri pari ${numeri_pari[i]}`);
    document.getElementById("dispari").innerHTML = (`numeri dispari ${numeri_dispari[i]}`);
}




