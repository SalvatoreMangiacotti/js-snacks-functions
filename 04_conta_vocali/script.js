/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';


// Dichiara la funzione qui.

function getVowelsNumber(string) {

    // Creo una variabile flag a cui passo un valore iniziale di 0
    let counter = 0;

    // Assegno alla variabile vowels tutte le possibili vocali
    const vowels = ["a", "e", "i", "o", "u"];

    // Ciclo sulla lunghezza della parola per controllare sono "incluse" (.includes) le vocali all'interno della parola
    for (let i = 0; i <= string.length; i++) {

        // SE la condizione risulta vera
        if (vowels.includes(string[i])) {
            
            // Il counter sale
            counter++;

        }

    }

    return counter;

}

// Invoca la funzione qui e stampa il risultato in console

// Word è il valore passato all'attributo string
console.log(getVowelsNumber(word));

//Risultato atteso se si passa 'javascript': 3 (a, a, i)