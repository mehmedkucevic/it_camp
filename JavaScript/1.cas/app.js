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

let prom1; //deklarisanje promenljive
prom1 = 54; // inicijalizacija (dodela vrednosti) promenljive

// 6. null - je tip podatka za nepostojecu promenljivu ili za promenljivu kojoj smo dodelili nekorektnu vrednost.

skola = null
console.log(skola);
console.log(typeof skola);

// 7. Symbol - novi tip podatka u JavaSrciptu koji se koristi za dodeljivanje jedinstvene ilii anonimne vrednosti

x = Symbol("Danas je lepo vreme.")
console.log(x)

y = Symbol("Danas je lepo vreme.")
console.log(y)

console.log(x === y) //razlikuju se

//Primiivni tipovi podataka se koriste kada imamo promenljivu odnosno varijablu sa samo jednom vrednoscu.

//NEPRIMITIVNI TIPOVI PODATAKA

//Za promenljive (varijable) koje mogu skladistiti vise vrednosti se koriste neprimitvni tipovi podataka, ili neke kompleksne vrednosti se koriste neprimitivni tipovi podataka

// Kada ispitujemo tip podatka za neku neprimivnu pormenljivu (varijablu) u JavaScriptu dobijamo Object za  tip

//------------------------------------------------------------------------------------------------------------//

//1. Nizovi (Arrays) - neprimitivni tip podatka koji sluzi za skladistenje vise vrednosti

//U javascripyu niz moze sadrzati elemente razlicitog tipa.

niz1 = ["Mitar","Dzenan","Haris","Hamed","Nikola"]
console.log(niz1)

niz2 = ["Hamed", 15 , false]
console.log(niz2)

// Jos jedan nacin definisanja niza:
niz3 = new Array("mitar","dzenan","haris","hamed","nikola")
console.log(niz3)

//------------------------------------------------------------------------------------------------------------//

//2. Objekti - (Obejcts) - su GLAVNI NEPRIMITIVNI TIP PODATAKA U JAVASCRIPTU.
//Objekti se zapisuju po principu name:value pair (ime:vrednost par).

obj1 = {
  ime:"Mehmed",
  prezime:"Kucevic",
  godine:15,
  skola:"Dva heroja",
  punoletnost: false
}
console.log(obj1.godine)

//------------------------------------------------------------------------------------------------------------//

//3. Setovi (Sets) - slicni  sunizovima sa razlikom da set ne moze da sadrzi duplikate

set1 = new Set(["alen","hasan","miona","amir","alen"])
console.log(set1)

//------------------------------------------------------------------------------------------------------------//

//4.Mape (Maps) - su slicni objektima, sa nesto drugacijim nacinom definisanja

map1 = new Map([
  ["jabuke", 50],
  ["kruske", 60],
  ["jagode", 80]
])
console.log(map1)