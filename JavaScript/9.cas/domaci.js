const duzina = +prompt("unesite duzinu terena");
const sirina = +prompt("unesite sirinu terena");
const rastojanje = +prompt("unesite rastojanje od ivice terena i ograde: ");

if (isNaN(duzina) || isNaN(sirina) || isNaN(rastojanje)) {
  console.log("Unete vrednosti moraju biti brojevi");
} else if (duzina > 90 || duzina > 120) {
} else if (duzina > 90 || duzina > 120) {
} else if (duzina > 90 || duzina > 120) {
} else if (duzina > 90 || duzina > 120) {
}
const obimTerena = 2 * duzina + 2 * sirina;
const obimOgrade = obimTerena + 8 * rastojanje;

//2. domaci zadatak
let brojac = 0;
let suma = 0;
let broj1 = +prompt("Unesite prvi broj");
let broj2 = +prompt("Unesite drugi broj");
if (broj1 === broj2) {
  console.log("Uneti brojevi moraju biti razliciti: ");
  while (broj <= broj2) {
    if (broj1 % 5 === 0) {
      brojac++;
      suma += broj1;
    }
    broj1++;
  }
  console.log(
    "aritmeticka sredina brojeva od broja" +
      broj1 +
      "do broja" +
      broj2 +
      "iznosi" +
      suma / brojac
  );
} else if (broj < broj2) {
} else if (broj1 > broj2) {
}




// 3. domaci zadatak

let broj = Number(prompt("Unesite neki broj iz intervala [12,16)"))
const brojZaPrikaz = broj

for ( broj;broj >= 1;broj--){
    console.log(broj)
    console.log(broj**2)
    console.log(broj - 25)
    
}