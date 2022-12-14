// JavaScript Number metode //

// toString () pretvara boroj u string
// ova metoda prettvara bilo koji tip podataka u string.

let x = 22;
console.log(x);
console.log(typeof x);
let y = x.toString();
console.log(y);
console.log(typeof y);
console.log(y + x);

// toExponential() - nam vraca string broja, zaokruzen na onoliko deccimala, koliki je argument metode

let z = 55.4758;
let w = z.toExponential(2);
console.log(w);

let a = 12.1234;
let b = a.toExponential(3);
console.log(b);
console.log(typeof b);

// toFixed () - metoda vraca string broja, koji ce biti zaokruzen na onoliko decimala koliki je zapravo argument

let q = 12.1234;
let r = a.toFixed(2);
console.log(r);
console.log(typeof r);

// toPrecision() - metoda vraca string broja, sa onoliko CIFARA koliki je argument funkcije.

a = 12.1212;
b = +a.toPrecision(3);
console.log(b);
console.log(typeof b);

// valueOf () - metoda vraca vrednost neke promenljive

console.log(x.valueOf());

// function palindrom(broj) {
//   let broj2 = broj
//   if (broj !== broj2) {
//     return `Unos nije palindrom`;
//   } else if (broj === broj2) {
//     return `Ovo je palindrom`;
//   }
// }
// console.log(palindrom(13));
// console.log(palindrom(11));

function isPalindrom(broj) {
  const stringBroja = broj.toString();
  const obrnutiBroj = "";
  for (let i = stringBroja.length - 1; i >= 0; i--) {
    obrnutiBroj += stringBroja[i];
  }
  if (stringBroja == obrnutiBroj) {
    return `Dati broj jeste palindrom`;
  }
}

// function trocifreni (broj){
// const tro1 = +broj.toPrecision(3)
// if(broj !== tro1){
//     return +tro1.toPrecision(2)

// }else if (broj === tro1){
//     return tro1
// }
// }
// console.log(trocifreni(123111))

function izbrisiDruguCifru(broj) {
  const duzina = broj.toString().length;
  const stringBroja = broj.toString();
  if (duzina !== 3) {
    return ` Argumen mora imati 3 cifre`;
  } else {
    const noviBroj = stringBroja.replace(stringBroja[1], "");
    return +noviBroj;
  }
}

console.log(izbrisiDruguCifru(4566));
console.log(izbrisiDruguCifru(456));

// Globalne JavaScript methods //

// Globalne metode mogu biti primenljene na bilo koji tip podatka

// Koristicemo 3 najcesce koriscene metode sa brojevima

// 1. Number() - vraca  broj konvertovan iz argumenta

console.log(Number("23  ")); // 23
// okolni razmaci ne prave problem
console.log(typeof Number("23")); // number

console.log(typeof Number("23+5")); // NaN
// razmaci nisu dozvoljeni kod Number metode
console.log(typeof Number("23 5")); // NaN

console.log(typeof Number("asd")); // NaN

console.log(typeof Number(true)); // 1

console.log(typeof Number(false)); // 0

console.log(typeof Number([])); // 0

console.log(typeof Number({})); // NaN


// 2. parseInt() - analizira argument i vraca ceo broj ako je moguce

console.log(parseInt("23  ")); // 23
// okolni razmaci ne prave problem
console.log(parseInt ("23")); // 23

console.log(parseInt ("23+5")); // 23
// razmaci jesu dozvoljeni kod parsInt metode ali se uzima prvi broj pre razmaka
console.log(parseInt ("23 5")); // 23

console.log(parseInt("asd")); // NaN

console.log(parseInt(true))// NaN

console.log(parseInt(false))// NaN

// 3. parseFloat() - analizira argument i vraca realni broj sa ddecimalnim zapisom ako je moguce.

console.log(parseFloat("23  ")); // 23
// okolni razmaci ne prave problem
console.log(parseFloat ("23")); // 23

console.log(parseFloat ("23+5")); // 23
// razmaci jesu dozvoljeni kod parsInt metode ali se uzima prvi broj pre razmaka
console.log(parseFloat ("23 5")); // 23

console.log(parseFloat("asd")); // NaN

console.log(parseFloat("23.78")); // 23.78

console.log(parseFloat(true))// 

console.log(parseFloat(false))// 

// Domaci zadatak :
// Napraviti funkciju koja ocekuje cetvorocifren broj, a vraca broj kojem su zamenjena prva i treca cifra, druga i cetvrta cifra
// 1234
// 3412

// I nacin

function zamena(br) {

  if (br > 9999 || br < 1000) {
    return " cetvorocifren broj da se unese.";
  } 
  else {
    const cifraJedinice = br % 10;
    const cifraDesetice = Math.trunc((br % 100) / 10);
    const cifraStotine = Math.trunc((br % 1000) / 100);
    const cifraHiljade = Math.trunc(br / 1000);
    return (
      cifraDesetice.toString() +
      cifraJedinice.toString() +
      cifraHiljade.toString() +
      cifraStotine.toString()
    );
  }
}
console.log(zamena(1234));
console.log(zamena(587));


// II nacin

function zamena2(broj){
  const stringBroja = broj.toString
  if(stringBroja.length !== 4 || isNaN(stringBroja)){
    return `Uneta vrednost mora biti cetvorocifren broj`
  }else {
    const prviDeo = stringBroja.slice(0,2)
    const drugiDeo = stringBroja.slice(2)
    const noviBroj = drugiDeo.concat(prviDeo)
    return +noviBroj
  }
}
