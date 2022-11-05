// Stringovi su immutable promenljive, nije moguce vrsiti modifikaciju postojeceg stringa
// Alternativa je da napravimo novi string i tada je moguce dodavati vrednosti kad god zelimo

let rec1 = "Petak";
console.log(rec1[2]);

// toUpperCase() - metoda koja pretvara ceo string u velika slova

let PETAK = rec1.toUpperCase();

console.log(PETAK);

// toLowerCase() - metoda koja pretvara ceo string u mala slova

let PETAKl = rec1.toLowerCase();

console.log(PETAKl);

// ==================================================================================================================//

const recenica0 =
  "zelimo datu recenicu PriKaZAti MALIM Isto tako I VElikim slovima";

const recc = recenica0.toLowerCase();

console.log(recenica0.toLowerCase());

// Ispisati recenicu gde svaka rec pocinje velikim slovom

// const recenica =
//   "sledece subote cemo imati test koji predstavlja kraj prvog ciklusa, nakon toga cemo videti ko sve nastavlja sa drugim ciklusom it camp-a";

// let novaRecenica = "";
// for (let i = 0; i < recenica.length; i++) {
//   if (i === 0) {
//     novaRecenica += recenica[i].toUpperCase();
//   } else if (recenica[i - 1 === " "]) {
//     novaRecenica += recenica[i].toUpperCase();
// } else{
//     novaRecenica += recenica[i];
// }
// }
// console.log(novaRecenica)

// ========================================================================================//

const recenica =
  "sledece subote cemo imati test koji predstavlja kraj prvog ciklusa, nakon toga cemo videti ko sve nastavlja sa drugim ciklusom it camp-a";


  let novaRecenica = "";
for (let i = 0; i < recenica.length; i++) {
  if (i === recenica.length-1) {
    novaRecenica += recenica[i].toUpperCase();
  } else if (recenica[i + 1 === " "]) {
    novaRecenica += recenica[i].toUpperCase();
} else{
    novaRecenica += recenica[i];
}
}
console.log(novaRecenica)