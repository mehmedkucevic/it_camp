// while peltja nam omogucava iteraciju kroz neki objekat nekoliko puta uz potencijalno odredjene uslove
// Kod while petlje je neopohodno na kraju koda definisati povecanje iteratora(Kako ne bi smo dobili beskonacnu petlju).

// Sintaksa

// while (uslov) {
// blok koda za izvrsavanja
// definisati povecanje iteratora
// }

//Ispisati brojeve od 1 do 10 koji su parni

let i = 1;
while (i < 11) {
  if (i % 2 === 0) {
    console.log(i);
  }
  i++;
}


const broj = +prompt("Unesite neku pozitivnu vrednost");
let iterator = 1;
while (iterator <= broj) {
  console.log(iterator ** 2);
  iterator++;
}




let broj1 = +prompt("Unesite prvi broj");
let broj2 = +prompt("Unesite drugi broj");

if(isNaN(broj1) || isNaN (broj2)){
    console.log("vrefnsot mora biti broj")
}
else if (broj1 < broj2) {
  while (broj1 <= broj2) {
    console.log(broj1);
  }
} else if (broj1 > broj2) {
  while (broj2 <= broj1) {
    console.log(broj2);
    broj2++
  }
} else if (broj1 === broj2) {
  console.log("Unesti brojevi moraju biti razliciti");
}

// do while petlja - predstavlja poseban slucaj while petlje, gde se prvo isvrsava kod pa tek onda porverava uslov.

// Sintaksa:

// do{
// blok koda za izvrsavanje
// } while(uslov)

// Ispisati sve brojeve od 1 do 5.
let broj3 = 1

do{
    console.log(broj3)
    broj3++
}while(broj3 < 6)

// Nedostatak do while petlje kroz primer.
//ispisati sve brojeve manje od 20 krenuvsi od broja koji unosi korisnik

let broj4 = Number(prompt("Unesite neki broj: "))
do{
    console.log(broj4)
    broj4++
}while(broj4<20)

// Domaci zadatak:
// Preko switch naredbe:

console.log(new Date().getDay())
// getDay()- daje vrednost od 0 do 6
// switch (new Date().getDay())
// Na osnovu vrednosti koju nam daje izraz iz switch naredbe, kroz case-ove i eventualno default ispisati poruku:

// "Danas je 'radni dan' " 
// "Ugodno 

let dan=+prompt("Unesite te dan: ")

switch(dan){
  case 0:
    console.log("Provedite ostatak vikenda ugodno!")
    alert("Provedite ostatak vikenda ugodno!")
    break

    case 1:
    console.log("Radni dan🙂")
    alert("Radni dan je🙂")
    break

    case 2:
    console.log("Radni dan🙂")
    alert("Radni dan je🙂")
    break

    case 3:
    console.log("Radni dan🙂")
    alert("Radni dan je🙂")
    break

    case 4:
    console.log("Radni dan🙂")
    alert("Radni dan je🙂")
    break

    case 5:
    console.log("Radni dan🙂")
    alert("Radni dan je🙂")
    break

    case 6:
    console.log("Lepo se provedi za vikend")
    alert("Provedite ostatak vikenda ugodno!")
    break

    default:
      (dan > 6)
      console.log("Niste uneli tacan broj dana")
      alert("Niste uneli tacan broj dana")
}