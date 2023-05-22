//Palidroma es 1
//Chiedere all’utente di inserire una parola
//Creare una funzione per capire se la parola inserita è palindroma




//Pari e Dispari
//L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
//Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
//Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
//Dichiariamo chi ha vinto.


// es 1

//CHIEDO ALL'UTENTE DI INSERIRE UNA PAROLA

let userWord = prompt("insert one word");

let wordReverse = reverseWord(userWord);

//CREO UN IF

if (userWord == wordReverse){
    console.log("the word is palindroma");
} else{
    console.log("the word is not palindroma");
}

// CREO LA FUNZIONE
function reverseWord(word){
    let poli= "";
    for (let i = word.length -1; i >= 0; i-- ){
        poli += word[i]
    }
    return poli;
}


//es 2
// CHIEDERE ALL'UTENTE PARI O DISPARI E IL NUMERO 
let choice = prompt("Write pari or dispari");
let numberPlayer= parsInt(prompt("insert your number than 1 a 5"));
//EVOCO LA FUNZIONE
let numberCpu = random(1,5);
let number = console.log(numberCpu);
let sum = numberPlayer + numberCpu;
// CREO LA FUNZIONE
function random(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


