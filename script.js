//Variabili input
const formBiglietti = document.getElementById("ticket-form");
const nomePassegero = document.getElementById("ticket-name");
const kmPercorsi = document.getElementById("ticket-km");
const etaPasseggero = document.getElementById("ticket-age");

// Variabili ticket

const passengerTicket = document.getElementById("ticket");
const passengerNAme = document.querySelector(".passenger-name");
const passengerPromo = document.querySelector(".passenger-promo");
const passengerSeat = document.querySelector(".passenger-seat");
const passengerCode = document.querySelector(".passenger-code");
const passengerPrice = document.querySelector(".passenger-price");
let promoPasseggero = "";

// Variabili prezzi
const prezzoPerKm = 0.21;
const scontoMinorenni = 20;
const scontoOver65 = 40;
let prezzoFinale = 0;

// Funzione calcolo costo biglietti

formBiglietti.addEventListener("submit", (event) => {
  event.preventDefault();

  if (etaPasseggero.value === "Minorenne") {
    const prezzoPieno = kmPercorsi.valueAsNumber * prezzoPerKm;
    prezzoFinale = prezzoPieno - (prezzoPieno * scontoMinorenni) / 100;
    promoPasseggero = "Sconto Minorenni";
  } else if (etaPasseggero.value === "Over65") {
    const prezzoPieno = kmPercorsi.valueAsNumber * prezzoPerKm;
    prezzoFinale = prezzoPieno - (prezzoPieno * scontoOver65) / 100;
    promoPasseggero = "Sconto Over65";
  } else if (etaPasseggero.value === "Maggiorenne") {
    const prezzoPieno = kmPercorsi.valueAsNumber * prezzoPerKm;
    prezzoFinale = prezzoPieno;
    promoPasseggero = "Tariffa regolare";
  }

  console.log("Nome", nomePassegero.value);
  console.log("kmPercorsi", kmPercorsi.value);
  console.log("età", etaPasseggero.value);
  console.log("prezzoFinale", prezzoFinale);

  //Biglietto

  if (prezzoFinale) {
    passengerTicket.classList.remove("d-none");
    passengerNAme.innerText = `${nomePassegero.value}`;
    passengerPromo.innerText = `${promoPasseggero}`;
    passengerSeat.innerText = `${generateCasualNumber(10, 100)}`;
    passengerCode.innerText = `${generateCasualNumber(1000, 10000)}`;
    passengerPrice.innerText = `${prezzoFinale.toFixed(2)}€`;
  }
});

function generateCasualNumber(min, max) {
  let number = Math.floor(Math.random() * (max - min + 1)) + min;
  return number;
}
// const annulla = document.getElementById("annulla");

// annulla.addEventListener("click", () => {
//   formBiglietti.reset();
//   passengerTicket.classList.add("d-none");
// });
