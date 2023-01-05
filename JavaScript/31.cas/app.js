// unshift() - metoda dodaje na pozcetku niza jedan ili vise elemenata.
// unshift() prikazuje novu duzinu niza

const niz = ["cetvrtak", "petak", "subota"];
niz.unshift("sreda");

console.log(niz);

console.log(niz.unshift("ponedeljeak", "utorak"));
console.log(niz);

// shift() - metoda brise prvi element niza i svim ostalim elemenima smanjuje index za 1
// shift() - metoda vraca izbrisani element. Kao kod pop() metode

console.log(niz.shift());
console.log(niz);

// delete  keyword za brisanje odredjenog elementa unutar niza:
// preko delette keyword mozemo izbrisati bilo koji  element iz niza ali na taj nacin ostavljamo rupe u nizu(undefined vrednosti)
console.log(niz.length);

delete niz[4];
console.log(niz);

// concat() - metoda se koristi za spajanje nizova s im sto kao argument mozemo poslati i string, ne mora iskljucivo biti niz
// concat() -meoda pravi novi niz

const muskarci = ["mitar", "tarik", "dzenan"];
const devojke = ["miona", "merisa", "hatidza"];
const grupa = muskarci.concat(devojke, "mehmed", "omar");
console.log(grupa);
//===============================================================================//

function splitArray(inputArray) {
  const firstArray = inputArray.slice(0, 3);

  const secondArray = inputArray.slice(3, -1);

  secondArray.pop();

  return [firstArray, secondArray];
}

const inputArray = grupa;
const [firstArray, secondArray] = splitArray(inputArray);
console.log(firstArray);
console.log(secondArray);

//==============================================================================//
const podeliNiz = (niz) => {
  const muskarci = [];
  const devojke = [];
  for (let osoba of niz) {
    if (osoba === "omar") {
      continue;
    } else if (osoba[osoba.length - 1] === "a") {
      devojke.push(osoba);
    } else {
      muskarci.push(osoba);
    }
  }
  return `Muskarci su ${muskarci} a devojke su ${devojke}`;
};
console.log(podeliNiz(grupa));
//===============================================================================//
