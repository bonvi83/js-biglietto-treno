// Chiedo quanti km deve percorrere utente
const km = prompt ("Quanti km devi percorrere?")
console.log(km)

// Chiedo quanti anni ha utente
const age = prompt ("Quanti anni hai?")
console.log(age)


//Applico sconto se rispetta alcuni parametri
let sconto20 = priceTicket * 0,2
let sconto40 = priceTicket * 0,4


//Calcolo del prezzo del biglietto
if (age < 18) {
    var priceTicket = priceTicket - sconto20;
} else if (age > 65) {
    var priceTicket = priceTicket - sconto40;
} else {
    var priceTicket = priceTicket
}

document.getElementById ("prezzo").innerHTML = priceTicket