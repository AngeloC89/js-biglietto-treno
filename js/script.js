// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.

// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:

// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65.
// L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.


 let kmrange = prompt('Ciao, quanti km dovrai percorrere?');
 let age = prompt('Quanti anni hai?');
 let price = kmrange * (0.21);

 console.log(kmrange,age);
 console.log(price);

 if(isNaN(kmrange) || (isNaN(age))){
    console.log('dati inseriti non validi.')
 }

 if(age < 18){
    let price = kmrange * (0.21 / 100 * 80);
    console.log(price);
 } else (age > 65){
    let price = kmrange * (0.21 / 100 * 60);
    console.log(price);
 }

