// Ispisati prvih deset brojeva u konzoli, jedan ispod drugog
console.log(1);
console.log(2);
console.log(3);
console.log(4);
console.log(5);
console.log(6);
console.log(7);
console.log(8);
console.log(9);
console.log(10);

// Petlja (LOOP) predstavlja nacin da se neki kod izvrsi (uz odredjene uslove) vise puta

// for pretlja - sintaksa:

// for (statement1; statement2; statement3) {
// kod za izvrsavanje u svakoj interaciji
// }

// statement1 predstavlja definisanje promenljive koja prestavlja iterator
// statement2 predstavlja uslov (granicu) do koje vrednosti ce iterator da ide
// statement3 prestavlja povecanje  ili smanjenje iteraora koje se desi na kraju svake iteracije

for (let i = 1; i <= 10; i++) {
  console.log(i);
}

// Ispisati brojeve od 1 do 10, izuzev broja 2 i 5

for (let i = 1; i < 11; i++) {
  if (i !== 2 && i !== 5) {
    console.log(i);
  }
}

// continue keyword (rezervisana rec) ako se nadje u nekoj interaciji, zapravo ozanacava da se ta ineracija zanemari i da se nastavi dalje sa sledecom

// II nacin

// Ispisati sve brojeve od 1 do 10 . Ako je neki broj deljiv sa 7 neka se prekine petlja.

for (let broj = 1; broj < 11; broj++) {
  if (broj % 7 === 0) break;
  else {
    console.log(broj);
  }
}
//----------------------------------------------------------------------------------------------//
// I nacin
for (let br = 1; br < 21; br++) {
  if (br % 2 === 0) {
    console.log(br);
  }
}
// II nacin
for (let br1 = 2; br1 <= 20; br1 += 2) {
  console.log(br1);
}
