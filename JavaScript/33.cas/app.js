// indexOf() metoda vraca  poziciju elementa koji predstavlja argument date metode
// indexOf() metoda nam vraca -1 ako se neki element koji smo naveli ne nalazi u nizu
const niz = ["hatidza", "bakir", "amer", "alen"];

const bakir = niz.indexOf("bakir");
console.log(bakir + 1);

// indexOf() metoda vraca  poziciju zadnjeg elementa koji predstavlja argument date metode
// indexOf() metoda nam vraca -1 ako se neki element koji smo naveli ne nalazi u nizu

const lastBakir = niz.lastIndexOf("Bakir");
console.log(lastBakir);

// Array.from() nam vraca niz koji se pravi od nekog objekta koij ima length

const noviNIz = Array.from("svako slovo ce biti poseban element niza");
console.log(noviNIz);

//includes() metoda nam vraca boolean u zavisnosti od toga da li se argument nalazi u nizu

console.log(niz.includes("emin"));

// keys() metoda vraca Array Iterator Object sa kljucevima (indeksima) nekog niza.

const indeksi = niz.keys();
console.log(indeksi);

for (let index of indeksi) {
  console.log(index);
}

// entries () metoda nam vraca Array Iterator Object sa key/value parovima nekog niza.

const entries = niz.entries();
console.log(entries);

const getElements = (niz, n) => {
  if (n > niz.length) {
    return niz;
  } else if (n == undefined) {
    return niz[0];
  } else {
    return niz.slice(0, n);
  }
};

console.log(getElements([]))
