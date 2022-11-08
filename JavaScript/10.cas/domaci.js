const recenica = prompt("Unesite neki string: ");
let brojac = 0;
let i = 0;
while (i < recenica.length) {
  if (recenica[i] === "m" || recenica[i] === "M") {
    brojac++;
  }
  i++;
}
console.log(brojac);

//==================================================================================================================//

const recenica2 = prompt("Unesite neki string: ");
let brojac2 = 0;
for (let i = 0; i < recenica2.length; i++) {
  if (isNaN(recenica2[i])) {
    continue;
  } else {
    brojac2++;
  }
}
console.log(brojac2)