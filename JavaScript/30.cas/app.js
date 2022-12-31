// Niz predstavlja strukturu podataka koja moze sadrzati vise od jedne vrednosti.

//Nizovi u JavaScriptu su heterogeni (mogu sadrzati elemente razlicitih tipova).

const niz = ["Mitar", "Vranic", 20, true];
console.log(niz);

// Dozvoljeno je cesto i prakticnije pisati svaki element niza u ovom redu.

// const niz = [
//     "Mitar",
//      "Vranic",
//       20,
//       true]

// Mozemo kreirati prazan niz , pa nakon toga dodavati rucno elemente.

const automobili = [];
automobili[0] = "audi";
console.log(automobili);
automobili[1] = "passat";

automobili[5] = "golf";
// empty rezultat - kad dodajemo nesto u niz koji nije dovoljn dug da dodje do odredjenog indexa koji smo uneli //

// Istu sintaksu mozemo koristiti za promenu vrednosti elementa

automobili[0] = "Mercedes";
console.log(automobili);

// Niz mozemo definisati pomocu new  keyword:

const niz2 = new Array("Hasan", "omar", "emin");
console.log(niz2);

// Radi jednostavnosti , sitljivost koda i brzine izvrsavanja je bolje koristiti [] nego new

const niz3 = [40];
console.log(niz3);
// new Array ce napraviti niz od 40 ,ili koliko unesemo, praznih mesta
const niz4 = new Array(40);
console.log(niz4);

// Pristupanje elemenaa se vrsi preko indeksa:
console.log(automobili);

// Poostoje 2 nacina za ispitivanje da li je neka promenljiva niz:
console.log(typeof automobili);

// 1. Array.isArray(potencijalnoNiz)
console.log(Array.isArray(automobili));
console.log(Array.isArray("neki string"));

// 2. potecijalnoNiz instaceof Array
console.log(automobili instanceof Array);
console.log(25 instanceof Array);

// Elementi niza mogu biti bilo koje vrednosti:
// Date, Array , Boolean , Function , Number,....

// Za proveru duzine niza koristimo length:
console.log(automobili.length);

// Za dodavanje elemenata na kraju nize koristi se push () metoda  // * jedno od pitanja na testu * //

const dani = ["ponedeljak", "utorak"];
dani.push("sreda");
console.log(dani);

// push() metoda nam omogucava dodavanje vise od jednog elementa na kraju niza.
// dani.push(...) nam vraca novu duzinu niza
console.log(dani.push("cetvrtak", "petak"));
console.log(dani);

dani[dani.length] = "subota";
console.log(dani);

// Nizovi su zapravo vrsta objekata koji imaju brojevne index-e.

// Za prevaranje niza u srting mozemo koristi dva nacina:

// 1. toString()

const daniStr = dani.toString();
console.log(typeof daniStr);
// obrnuti postupak
const dani0 = daniStr.split(",");
console.log(dani0);

// 2. join()
// Klascni primer:
const daniStr2 = dani.join();
console.log(daniStr2);
console.log(typeof daniStr2);

// Dobijanje stringa i stavljanje nekog znakka izmedju elemenata niza koji smo pretvorili u string
const daniStr3 = dani.join("*");
console.log(daniStr3);

// pop() metoda brise poslednji element iz niza.

const subota = dani.pop();
console.log(dani);
console.log(subota);

// homework
// iz datog niza ispitati koliko elemenata je tipa string
// koliko tipa number
// koliko tipa boolean
// koliko elemenata je zapravo niz?

const nizz = [
  "jagoda",
  25,
  true,
  "mandarina",
  [1, 2, 3],
  "ananas",
  49,
  694,
  "tresnja",
];
