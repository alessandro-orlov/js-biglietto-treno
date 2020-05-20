//==========================================================================//
//=========================== FINAL Ver. ===================================//
// User Age
var userAge = parseInt(prompt('Inserisci la tua età'));
if (isNaN(userAge)) {
  alert('Errore: Inserisci un valore numerico');
}

// Km to do by train
var kmLenght = parseInt(prompt('Quanti chilometri devi percorrere'));
if (isNaN(kmLenght)) {
  alert('Errore: inserisci un valore numerico');
}

// Price based on kmLenght
var priceForKm = (kmLenght * 0.21);

var prezzoBiglietto = priceForKm;

// Price discount based on age
if (userAge < 18)  {
  prezzoBiglietto = prezzoBiglietto - prezzoBiglietto * .2; //Youth discount 20%
} else if (userAge > 65) {
  prezzoBiglietto = prezzoBiglietto - prezzoBiglietto * .4; //Senior discount 40%
}

document.getElementById('prezzo').innerHTML = prezzoBiglietto + '€';

//==========================================================================//
//=========================== Ver 1.0 ======================================//

// // User Age
// var userAge = prompt('Inserisci la tua età');
// if (isNaN(userAge)) {
//   alert('Errore: Inserisci un valore numerico');
// }
// console.log(userAge);
//
// // Km to do by train
// var kmLenght = prompt('Quanti chilometri dovi percorrere');
// if (isNaN(kmLenght)) {
//   alert('Errore: inserisci un valore numerico');
// }
// console.log(kmLenght);
//
// // Price based on kmLenght
// var priceForKm = (kmLenght * 0.21);
//
// // Price discont 20% for youth
// var discountYouth = ( priceForKm - (priceForKm * 0.2) );
// console.log(discountYouth);
//
// //price discont 40% for senior people
// var discontSenior = ( priceForKm - (priceForKm * 0.4) );
// console.log(discontSenior);
//
// var prezzoBiglietto = priceForKm;
//
// //Calculation based on user's Age
// if (userAge < 18) {
//   prezzoBiglietto = discountYouth
// } else if (userAge > 65) {
//   prezzoBiglietto = discontSenior
// }
//
//
// document.getElementById('prezzo').innerHTML = prezzoBiglietto + '€';
