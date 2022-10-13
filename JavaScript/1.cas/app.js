document.getElementById("paragraf").innerHTML =
  "Ovo je paragraf koji je unet naknadno";

paragraf = document.getElementById("paragraf");

paragraf.style.backgroundColor = "red";

console.log("Ovo je nas prvi ispis u konzoli");

// tipovi podataka u javascrpitu

// za proveru tipa neke promenljive (varijable) se koristi type of operator.

// Primitivni tipovi podataka

// 1. stringovi - predstavlja niz karaktera koji je zapisan unutar navodnika obicnih ili duplih

console.log("Ovo je neki string koji je napisan unutar duplih navodnika");
console.log(
  typeof "Ovo je neki string koji je napisan unutar duplih navodnika"
);

console.log("Ovo je neki ispis unutar obicnih navodnika");

// 2. number - predstavlja broj, koji moze biti zapisan sa ili bez decimalnog zapisa
// ne pravi se razlika izmedju celih,realnih i kompleksnih brojeva

console.log(14);
console.log(typeof 14);

console.log(typeof -123, 2);

// 3. BigInt - se koristi za sladistenje brojeva cija granica prelazi granicu

console.log(BigInt(123123123123123123123123123123));

console.log(typeof BigInt(123123123123123123123123123123));

// 4. boolean - logicki entitet koji moze imati dve vrednosti:
// true
// false.
// Najcesce se koristi u kondicijalima (if naredbe) i ima veliku primenu

daLiPadaKisa = false;

console.log(true);
console.log(typeof true);

console.log(daLiPadaKisa);

// 5. undefined  - je tip podatka koji se javlja  kada imamo deklarisanu neku promenu ali joj nismo dodelili vrednost .
// u tom slucaju i vrednost i tip pormenljive je undefined.

let prom1;  //deklarisanje promenljive
prom1 = 54; // inicijalizacija (dodela vrednosti) promenljive


// 6. null - je tip podatka za nepostojecu promenljivu ili za promenljivu kojoj smo dodelili nekorektnu vrednost.


console.log(skola)