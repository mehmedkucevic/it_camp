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

function blizi(prvi, drugi) {
  if (prvi != drugi) {
    prviBroj = Math.abs(prvi - 100);
    drugiBroj = Math.abs(drugi - 100);
    if (prviBroj < drugiBroj) return `Prvi broj je blizi broju 100.`;
  } 
  else if  (drugiBroj<prviBroj){
   return `Drugi broj je blizi broju 100.`;
  }
}
console.log(blizi(99, 102));
console.log(blizi(78, 101));
