let recenica = "danas cemo raditi neke opercaije sa stringovima";
console.log(recenica);
// console.log(typeof recenica)
let omar = "Omar";

//Pristupanje nekom karakteru stringa se vrsi preko indeksa.
// INDEKSIRANJE IDE OD NULE.
// U SVAKOM ITERIAJUCEM OBJEKTU POSLEDNJI KARAKTER IMA INDEX  (UKUPNA DUZINA STRINGA- 1)
console.log(omar[0]);
console.log(omar[1]);

// Metoda za dobianje ukupne duzine stringa je lenght:
let duzinarecenice = recenica.length;
console.log(duzinarecenice);
console.log(omar.length);

// Primer. Svaki karakter neke recenice neka se ispise jedan ispod drugog.

// Kod ovakvih zadataka iterator predstavlja index pomocu kojeg pristupamo karakteru stringa

recenica = "danas cemo raditi neke opercaije sa stringovima";
for (let i = 0; i < duzina; i++) {
  console.log(recenica[i]);
}


// Na osnovu unete recenice od strane kosrisnika ispisati recenicu tako da svaki karakter ide jedan ispod drugog
//Dok ako je neki karakter = "a" neka se ispise broj 5, a u slucaju da je karakter jednak "5",neka se ispise nista.
