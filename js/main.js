// Chiedo quanti km deve percorrere utente
const km = prompt ("Quanti km devi percorrere?")
console.log(km)

// Chiedo quanti anni ha utente
const age = prompt ("Quanti anni hai?")
console.log(age)

//Il calcolo parziale del biglietto
const parzialTicket = km * age
console.log(parziale)


//Applico sconto se rispetta alcuni parametri
let sconto20 = parzialTicket * 0.2
let sconto40 = parzialTicket * 0.4


//Calcolo del prezzo del biglietto
if (age < 18) {
    let priceTicket = parzialTicket - sconto20;
} else if (age > 65) {
    let priceTicket = parzialTicket - sconto40;
} else {
    let priceTicket = priceTicket
}

//Comunico all'utente la cifra
document.getElementById ("prezzo").innerHTML = priceTicket