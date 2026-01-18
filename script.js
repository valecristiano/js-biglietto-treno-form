//Variabili input
const formBiglietti = document.getElementById("ticket-form");
const nomePassegero = document.getElementById("ticket-name");
const kmPercorsi = document.getElementById("ticket-km");
const etaPasseggero = document.getElementById("ticket-age");

const prezzoPerKm = 0.21;
const scontoMinorenni = 20;
const scontoOver65 = 40;
let prezzoFinale = 0;

formBiglietti.addEventListener("submit", (event) => {
  event.preventDefault();

  //   const kmRichiesti = parseInt(kmPercorsi.value);

  if (etaPasseggero.value === "Minorenne") {
    const prezzoPieno = kmPercorsi.valueAsNumber * prezzoPerKm;
    prezzoFinale = prezzoPieno - (prezzoPieno * scontoMinorenni) / 100;
  } else if (etaPasseggero.value === "Over65") {
    const prezzoPieno = kmPercorsi.valueAsNumber * prezzoPerKm;
    prezzoFinale = prezzoPieno - (prezzoPieno * scontoOver65) / 100;
  } else if (etaPasseggero.value === "Maggiorenne") {
    const prezzoPieno = kmPercorsi.valueAsNumber * prezzoPerKm;
    prezzoFinale = prezzoPieno;
  }

  console.log("Nome", nomePassegero.value);
  console.log("kmPercorsi", kmPercorsi.value);
  console.log("età", etaPasseggero.value);
  console.log("prezzoFinale", prezzoFinale);
});
