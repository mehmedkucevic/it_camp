// INTERAKCIJA SA KORISNIKOM //

// promt() metoda nam sluzi za komunikacije sa korisnikom.

const ime = prompt("Unesite vase ime: ");
console.log(ime);

const godine = prompt("Unesite svoju starost: ");
console.log(godine);
console.log(typeof godine);
// Sad je neophodno godine prevesti u broj:

// Postoje 2 nacina za prevodjen stringa u broj:

// 1. Number(promenljiva)
const brGodina = Number(godine);
console.log(brGodina);
console.log(typeof brGodina);

// 2. +promenljiva

const brGodina2 = +godine;
console.log(brGodina2);
console.log(typeof brGodina2);

const visina = +prompt("Unesite svoju vidinu u cm: ");
console.log(visina);
