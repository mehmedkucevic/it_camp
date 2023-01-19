// U fibonacijevom nizu cije vrednosti  ne prelaze 4 miliona, pronaci sumu parnih elemenata

// Fibonacijev niz je sastavljen na nacin da je element jednak zbiru prethodna dva broja.

const niz = [1, 1];

let i = 2;
while (niz[i - 2] + niz[i - 1] < 4000000) {
  niz.push(niz[i + 2] + niz[i - 1]);
  i++;
}
console.log();

//paindrom funkcija

function isPalindrom(broj) {
  const strBroj = broj.toString();
  let newStrBroj = "";
  for (let i = strBroj.length - 1; i >= 0; i--) {
    newStrBroj += strBroj[i];
  }
  if (strBroj === newStrBroj) {
    return true;
  } else {
    return false;
  }
}

function maxPolindrom() {
  for (i = 100; i < 1000; i++) {
    for (k = i; k < 1000; k++) {
      if (isPalindrom(i * k) && !niz.includes(i * k)) {
        niz.push(i * k);
      }
    }
  }
  return;
}
console.log(maxPolindrom());

// II nacin

// function maxPolindrom2() {
//   for (i = 999; i > 99; i--) {
//     for (k = i; k > 99; k--) {
//       if (isPalindrom(i * k)) {
//         return i * k;
//       }
//     }
//   }
// }



// Domaci : raditit zadatke na w3rsc