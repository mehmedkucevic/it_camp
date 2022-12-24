//  JavaScript Math Object //

// Math object - nam dozvoljava da izvrsimo neke dodatne radnje sa brojevima.

// Math Properties (Konstante)

// Sintaska je Math.Property.

// Mah kostanti ima 8:

// 1.
// Math.E - vraca Ojlerov broj
console.log(Math.E);

// 2.
// Math.PI - vraca vrednost pi
console.log(Math.PI);

// 3.
// Math.SQRT2 - vraca vrednost kvadratnog korena broja 2
console.log(Math.SQRT2);

// 4.
// Math.SQRT_2 - vraca vrednost kvadratnog korena broja 1/2
console.log(Math.SQRT1_2);

// 5.
// Math.LN2 - vraca vrednost logaritma osnove E broja 2
console.log(Math.LN2);

// 6 .
// Math.LN10 - vraca vrednost logaritma osnove E broja 10
console.log(Math.LN10);

// 7.
// Math.LOG2E - vraca vrednost logaritma osnove 2 broja E
console.log(Math.LOG2E);

// 8.
// Math.LOG10E - vraca vrednost logartima osnove 10 broja E
console.log(Math.LOG10E);

// Math Methods //

// Sinaksa je:
// Math.method(number)

// Number to Integer:

// 1. Math.round() - vraca blizi ceo broj
console.log(Math.round(22.23));
console.log(Math.round(22.74));

// 2. Math.ceil () - vraca sledeci ceo broj
console.log(Math.ceil(22.22)); //23
console.log(Math.ceil(-22.22)); // -22

// 3. Math.floor () - vraca prethodni ceo broj
console.log(Math.floor(22.22)); //22
console.log(Math.floor(-22.22)); //23

// 4. Math.trunc () - vraca ceo broj bez decimalnog zapisa
console.log(Math.trunc(22.22)); // 22
console.log(Math.trunc(-22.22)); //-22

//==============================================================//

// Math.sign(number) - vraca -1,0 ili 1 u zavisnosti od toga kog je znaka broj

console.log(Math.sign(22)); //1
console.log(Math.sign(-22)); //-1
console.log(Math.sign(0)); //0

// Math.pow(number,power) - vraca number stepenovan na power

console.log(Math.pow(2, 3)); // 8
console.log(Math.pow(2, 9)); // 512

// Mat.sqrt (number) -  vraca kvadratni koren broja number

console.log(Math.sqrt(9)); // 3
console.log(Math.sqrt(2)); // 1.4142135623730951

// Math.abs(number) - vraca apsolutnu vrednost nekog broja
console.log(Math.abs(5)); // 5
console.log(Math.abs(-5)); // 5

// Math.sin(radians) - vraca vrednost sinusa (izmedju -1 i 1). Argument se posmatra kao vrednost u radijanima
console.log(Math.sin(0)); // 0
console.log(Math.sin(Math.PI / 2)); // 1

// Math.cos(radians) - vraca vrednost kosinusa (izmedju -1 i 1). Argument se posmatra kao vrednost u radijanima
console.log(Math.cos(0)); // 1
console.log(Math.cos(Math.PI / 2)); // 0

// Primena kod nizova:
const najmanji = Math.min.apply(null,[19,55,33])
console.log(najmanji)

// Math.random() - vraca nam broj izmedju 0 (ukljucujuci) i 1 (nije ukljucen)
console.log(Math.random())

// Broj izmedju 0 i 1:

const broj = Math.round(Math.random())

console.log(broj)

// Broj izmedju 0 i 5:
const broj2 = Math.round(Math.random()*5)
console.log(broj2)

// Broj izmedju 50 i 100:
// mozemo sa brojem kolik ce opseg  zapravo biti, a dodajemo broj koji predstavlja pocetnu vrednost iz opsega.
const broj3 =Math.round(Math.random()*50 +50)
console.log(broj3)

// Math.log(x) - vraca vrednost logaritma broja x za osnovu E
// Math.log2(x) - vraca vrednost logaritma broja x za osnovu 2
// Math.log10(x) -  vraca vrednost logaritma broja x za osnovu 10

console.log(Math.log(0.36))
console.log(Math.log2(1.5))
console.log(Math.log10(10))


