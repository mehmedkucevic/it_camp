// 1. Zadatak

const prviBroj = Number(prompt("Unesite prvi broj: "));

const drugiBroj = +prompt("Unesite drugi broj: ");
if (isNaN(prviBroj) || isNaN(drugiBroj)) {
  console.log("Unete vrednosti trebaju biti brojevi");
} else if (prviBroj === drugiBroj) {
  console.log(
    "Povrsina kvadrata na osnovu unetih stranica iznosi" + prviBroj * drugiBroj
  );
} else if (prviBroj !== drugiBroj) {
  console.log(
    "Povrsina pravougaonika na osnovu unetih stranica iznosi" +
      prviBroj * drugiBroj
  );
}

// Za proveru da li je vrednost nekog broja NaN se koristi metoda:
// isNaN(vrednost)

// 2. Zadatak

const x = Number(prompt("Unesite prvi broj"));
const y = +prompt("Unesite druugi broj");

if (isNaN(x) || isNaN(y)) {
  console.log("Vrednosi moraju biti brojevi");
}else if(y === x){}






