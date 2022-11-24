// funkcije u javasrciptu predstavljaliniju koda koji se izvrsava samo prilikom pozivanja iste
// mozemo je definisati putem :
// 1. funcion keyword
// 2. arrow function sintakse

// 1. function keyword

// pravimo funkciju koja sabira broj 3 i br 5:
function zbirTriPet() {
  const zbir = 3 + 5;
  return zbir;
  // sve sto se naddje posle I returna ne racuna se !!!
}

console.log(zbirTriPet());

// pravimo funkciju koja sabira dva broja:
function zbirDvaBroja(par1, par2) {
  return par1 + par2;
}

console.log(zbirDvaBroja(5, 22));

function zbirKvadrata(a, b) {
  return a ** 2 + b ** 2;
}
console.log(zbirKvadrata(5, 4));

// Defaultna vrednost nekog parametra:

// 1. nacin
function zbirKvadrata2(a, b) {
  if (b === undefined) {
    return a ** 2;
  } else {
    return a ** 2 + b ** 2;
  }
}
console.log(zbirKvadrata2(2));

// 2. nacin
// defaultnr vredosti se stavljaju na kraju
// ne moze neka defaultna vrednost biti definisana pre obavezne
function zbirKvadrata3(a, b = 0) {
  return a ** 2 + b ** 2;
}
console.log(zbirKvadrata3(5));
console.log(zbirKvadrata3(5, 1));

// jos jedan nacin definisanja funkcije preko function keyword:

const aritmetickaSredina = function (par1 = 1, par2 = 1, par3 = 1) {
  return (par1 + par2 + par3) / 3;
};

console.log(aritmetickaSredina(4, 5, 3));
console.log(aritmetickaSredina(4, 5));
console.log(aritmetickaSredina());

//======================================================================================================//
// e

function povrsina(a = 1, b = 1) {
  if (a === b) {
    return a * b + " ova dva broja su ista";
  } else {
    return a * b + " razlicita su ova dva broja";
  }
}
console.log(povrsina(3, 3));
console.log(povrsina(3, 4));

// TRECI ZADATAK SA TESTA PREKO FUNCTION KEYWORD//

// let recenica;
// recenica = “Nakon danasnjeg testa cemo znati ko ce nastaviti sa drugim ciklusom it campa”
// Na osnovu date recenice napraviti i ispisati novu recenicu tako da:

// (i)se svi samoglasnici pretvore u velika slova;
// (ii)na kraju se doda ‘.’
// (iii)ostali karakteri se ne menjaju.
// Dakle, treba se ispisati:
// “NAkOn dAnAsnjEg tEstA cEmO znAtI kO cE nAstAvItI sA drUgIm cIklUsOm It cAmpA.”

// function novaRecenica(recenica) {
//   let recenica2 = "";
//   for (let i = 0; i < recenica.length; i++) {
//     if (
//       recenica[i] === "a" ||
//       recenica[i] === "e" ||
//       recenica[i] === "i" ||
//       recenica[i] === "o" ||
//       recenica[i] === "u"
//     ) {
//       recenica2 += recenica[i];
//     }
//   }
//   return recenica2;
// }

// console.log(novaRecenica("Pocelo je svetsko prvenstvo u fudbalu"));

// const myFunction = () => {
//   //function code
// };

// const proizvodDvaBroja = (br1, br2) => {
//   return br1 * br2;
// };
// console.log(proizvodDvaBroja(2, 16));

//ako arrow funkicja ima samo jedan parametar nije neophoddno okruziti ga zagradama
// ako je funkcija jednostavna tjst. ako odma vraca neki  jednostavan izraz onda sama sintaksa izgleda kraca zapravo nuje neophodno koristiti {} zagrade i return keyword

// const kvadratDvaBroja = (broj) => broj ** 2;

//=======================================================================================================//

const unos = () => {
  const broj = Number(prompt("unesite neki broj"));
  if (isNaN(broj)) {
    return "uneta vrednost nije broj";
  } else if (broj === 0) {
    return "uneta je nula";
  } else if (broj < 0) {
    return "broj je negativan";
  } else {
    return "broj je pozitivan";
  }
};

console.log(unos);

///////////////////////////

const satnica = (br1, br2) => {
  if (br1 >= 9 && br1 < 17 && br2 >= 0 && br2 <= 59) {
    return "stigao";
  } else return "nije stigao";
};
console.log(satnica(10, 5));
console.log(satnica(10, 59));
console.log(satnica(17, 0));
