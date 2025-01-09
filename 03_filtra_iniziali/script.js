/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];

// Dichiara la funzione qui.

function filterByLetter(arrayItems, firstLetter) {

    // Eseguo la funzione filtrando con il metodo .filter ogni item dell'array che inizia (metodo .startsWith) con firstLetter("A")
    return arrayItems.filter((arrayItem) => arrayItem.startsWith(firstLetter));

}

// Invoca la funzione qui e stampa il risultato in console

// Assegno all'attributo arrayItems il valore di names, mentre "A" è il valore della lettera utilizzato per il filtro
console.log(filterByLetter(names, "A"));

//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]