// User Age
var userAge = prompt('Inserisci la tua età');
if (isNaN(userAge)) {
  alert('Errore: Inserisci un valore numerico');
}
console.log(userAge);

// Km to do by train
var kmLenght = prompt('Quanti chilometri dovi percorrere');
if (isNaN(kmLenght)) {
  alert('Errore: inserisci un valore numerico')
}
console.log(kmLenght);

var priceForKm = (kmLenght * 0.21)

var prezzoBiglietto = priceForKm;

document.getElementById('prezzo').innerHTML = prezzoBiglietto + '€';
