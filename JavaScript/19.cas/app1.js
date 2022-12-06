// search() metoda nam daje poziciju (index) nekog stringa (argumenta metode).
// slican je indexof() metodi

// search()

const recenica = "desila se neocekivana poseta";
const pos = recenica.search("poseta");
console.log(pos);

// razlika izmedju search() i indexOf() metoda:
// 1. IndexOf()- dozvoljava drugi argument (pozicija odakle krece trazenje stringa)
// 2. Search() metoda dozvoljava Regular Expressions

const recenica2 =
  "Danas su pocela cevrtfinala svetskog prvenstva u fudbalu, danas je takodje bila dodela sertifikata";
const pos2 = recenica2.search("danas");
console.log(pos2);

// match() metoda nam vraca niz
const matchingDanas = recenica2.match("danas");
const matchingDanas1 = recenica2.match(/danas/gi);
console.log(matchingDanas);
console.log(matchingDanas1);

// includes() metoda nam vraca boolean (true ili false) zavisnosti od toga da li se argument nalazi u stringu na koji primenjujemo metodu

const var1 = recenica2.includes("Omar");
const var2 = recenica2.includes("danas");
console.log(var1);
console.log(var2);

//startsWith() i endsWith() metode nam vracaju boolean(true ili false) u zavisnosti od toga da li dati string pocinje(zavsava) argumentom metode.

const var3 = recenica2.startsWith("Danas");
const var4 = recenica2.endsWith("Danas");
console.log(var3);
console.log(var4);

// JavaScript Template Literals:

// Bolja praksa je koristiti `` za pisanje stringa.

// Prednosti :
// 1. Mozemo koristiti  navodnike u stringu bez dobijanja error-a
// const recenica3 = ' Neki "dobri" ljudi '// 2. Template Literals dozvoljavaju multiline stringove :
`asdasdasd
asdasdasdasdasd
asdasdasdasdasd`;
// 3. Interpolacija - Omogucava laski nacin interpolacije promenljivih (ili izraza) unutar nekog stringa.
let a = 5;
let b = 34;
const recenica4 = `Jedna flasa ima zapreminu ${a}l,ukupna kolicina limunade
je ${b}l, stoga mozemo napuniti ${Math.floor(b / a)} flasa limunade `;

console.log(recenica4);

function task(recnica) {
  if (recenica.includes("skola")) {
    return recenica.indexOf("skola");
  } else if (recenica.startsWith("Automobil")) {
    return true;
  } else if (recenica.length % 2 === 0) {
    let brojac = 0;
    if (recenica.includes("kuca")) {
      for (let i = 0; i <= recenica.length - 1; ) {
        if (recenica.includes("kuca", i)) {
          brojac++;
          i += 3;
        }
        i++;
      }
    }
    return `Broj pojavljivanja unutar datog stringa je ${brojac}`;
  }
}

console.log(task("skola je uticala da alen i hatidza spavaju za vreme casa"));
console.log(task(" Automobil je prodat"));
console.log(task("Ja zivim u stanu"));
console.log(task("kuca kucakuca kuca kuca."));
