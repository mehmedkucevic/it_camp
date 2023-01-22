// Rekurzivna funkcija poziva izvrsavanje same sebe unutar funkcije.
// Efekat petlje mozemo postici rekurzivnom funkcijom

// Ispisati brojeve od 10 do 1
const ispisivanje = (n) => {
  console.log(n);
  if (n - 1 > 0) {
    ispisivanje(n - 1);
  }
};
ispisivanje(10);

// Flat() - metoda se korisri kada unutar niza imamo element koji je niz, i zelimo da sve podelemente izvucemo na nacin da oni predstavljaju elemente glavnog niza
const niz = [
  ["jabuka", "kruska", "jagoda"],
  ["krompir", "paradajz", "luk"],
  ["pite", "mantije"],
];

const asd = niz.flat();
console.log(asd);

const tenthTask = (arr) => {
  let outputStr = "";
  for (let i = 0; i < arr.length; i++) {
    outputStr += `row ${i + 1}\n`;
    for (let k of arr[i]) {
      outputStr += `${k} \n`;
    }
  }
  return outputStr;
};
console.log(tenthTask(niz));
////
function leapYears(from, to) {
  const leapYears = [];
  for (let i = from; i <= to; i++) {
    if ((i % 4 === 0 && i % 100 !== 0) || i % 400 === 0) {
      leapYears.push(i);
    }
  }
  return leapYears;
}

console.log(leapYears(2000,2012))

//
