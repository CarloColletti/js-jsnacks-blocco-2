// Inserisci un numero, se è pari stampa il numero, se è dispari stampa il numero successivo.




// collego il bottone per la richiesta 
const button_submit = document.getElementById("button_submit")

// evento 
button_submit.addEventListener('click',
    function () {
        // prendo il numero 
        const number_select = document.getElementById("number");
        console.log(typeof number_select)
        // metto il numero inserito in una variabile 
        let number_validate = number_select.value;
        // se il numero ha un resto diverso da zero incrementa di uno 
        if (number_validate % 2 != 0) {
            // incremento 
            number_validate++
            
        }
        
        document.getElementById("result").innerHTML = (`il numero ${number_validate} è pari`);
        
        
    }
    
    
    
)
   
