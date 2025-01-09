/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];


// Dichiara la funzione qui.

function getStringsFirstChar(arrayItems) {

    // Creo un array e lo assegno alla variabile emptyArray
    let emptyArray = [];

    // Ciclo su tutto l'array per poter . . .
    for (let i = 0; i < arrayItems.length; i++) {

        // "Pushare" gli elementi dell'array names (arrayItems)
        // Con il metodo .charAt(0) seleziono solo la prima lettera (indice 0) di ogni stringa che compone l'array 
        emptyArray.push(arrayItems[i].charAt(0));

    }

    return emptyArray;

}

// Invoca la funzione qui e stampa il risultato in console

// Assegno all'attributo arrayItems il valore di names
console.log(getStringsFirstChar(names));

//Risultato atteso: ["A", "L", "M", "A", "G", "A"]