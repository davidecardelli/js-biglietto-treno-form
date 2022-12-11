/* 
TRACCIA

Descrizione:
Scrivere un programma che chieda all’utente:
- Il numero di chilometri da percorrere
- Età del passeggero
Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
- il prezzo del biglietto è definito in base ai km (0.21 € al km)
- va applicato uno sconto del 20% per i minorenni
- va applicato uno sconto del 40% per gli over 65.
MILESTONE 1:
Iniziamo implementando il programma senza alcuna estetica: usando esclusivamente due input e un bottone (non stilizzati), realizziamo le specifiche scritte sopra. La risposta finale (o output) sarà anch’essa da scrivere in console.
MILESTONE 2:
Solo una volta che il milestone 1 sarà completo e funzionante allora realizzeremo un form in pagina in cui l’utente potrà inserire i dati e visualizzare il calcolo finale con il prezzo.
Il recap dei dati e l'output del prezzo finale, andranno quindi stampati in pagina (il prezzo dovrà essere formattato con massimo due decimali, per indicare i centesimi sul prezzo). Questo richiederà un minimo di ricerca.
*/


const userChoice = document.getElementById('userChoice');
const reset = document.getElementById('reset');
const result = document.getElementById('result');



userChoice.addEventListener('click' , function(){

    const name = document.getElementById('name').value;
    const kms  = document.getElementById('kms').value;
    const age = document.getElementById('age').value;
    console.log(name, kms, age)

    const priceKm = 0.21
    console.log(priceKm);


    const price = (kms * priceKm);
    console.log(price);
    
    let finalPrice = price
    document.getElementById('result').innerText = name + ', il prezzo del tuo biglietto è: ' + finalPrice + '€';

    if (age < 18) {
        finalPrice = (price / 100 *80).toFixed(2)
        document.getElementById('result').innerText = name + ', il prezzo del tuo biglietto Young è: ' + finalPrice + '€';
    }  
    else if (age >= 65) {
        finalPrice = ((price / 100)*60).toFixed(2)
        document.getElementById('result').innerText = name + ', il prezzo del tuo biglietto Senior è: ' + finalPrice + '€';
    }

    console.log(finalPrice);
});




reset.addEventListener('click' , function(){
    location.reload();
})
