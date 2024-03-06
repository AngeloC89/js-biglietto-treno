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
 document.getElementById('theresult').innerHTML = 'Dati inseriti non validi.';
    
 } else {
    price = kmrange * 0.21;

  if(age < 18){

    price = price - (price * 20 / 100);
    console.log(price);
    document.getElementById('theresult').innerHTML = 'Prezzo del biglietto: ' + price.toFixed(2) +'€';

 } else if (age >= 65){

    price = price - (price * 40 / 100);
    console.log(price);
    document.getElementById('theresult').innerHTML = 'Prezzo del biglietto: ' + price.toFixed(2) +'€';
 }
 document.getElementById('theresult').innerHTML = 'Prezzo del biglietto: ' + price.toFixed(2) +'€';
 
}




 



