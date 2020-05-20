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

// Price based on kmLenght
var priceForKm = (kmLenght * 0.21)

// Price discont 20% for youth
var discountYouth = ( priceForKm - (priceForKm * 0.2) )
console.log(discountYouth)

//price discont for senior people
var discontSenior = ( priceForKm - (priceForKm * 0.4) )
console.log(discontSenior)


var prezzoBiglietto = priceForKm;
if (userAge < 18) {
  prezzoBiglietto = discountYouth
} else if (userAge > 65) {
  prezzoBiglietto = discontSenior
} else {
  priceForKm
}

document.getElementById('prezzo').innerHTML = prezzoBiglietto + '€';
