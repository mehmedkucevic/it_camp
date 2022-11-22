// funkcije u javasrciptu predstavljaliniju koda koji se izvrsava samo prilikom pozivanja iste
// mozemo je definisati putem :
// 1. funcion keyword
// 2. arrow function sintakse

// 1. function keyword

// pravimo funkciju koja sabira broj 3 i br 5:
function zbirTriPet() {
  const zbir = 3 + 5;
  return zbir;
  // sve sto se naddje posle I returna ne racuna se !!!
}

console.log(zbirTriPet());

// pravimo funkciju koja sabira dva broja:
function zbirDvaBroja(par1, par2) {
  return par1 + par2;
}

console.log(zbirDvaBroja(5, 22));

function zbirKvadrata(a, b) {
  return a ** 2 + b ** 2;
}
console.log(zbirKvadrata(5, 4));

// Defaultna vrednost nekog parametra:

// 1. nacin
function zbirKvadrata2(a, b) {
  if (b === undefined) {
    return a ** 2;
  } else {
    return a ** 2 + b ** 2;
  }
}
console.log(zbirKvadrata2(2));

// 2. nacin
// defaultnr vredosti se stavljaju na kraju
// ne moze neka defaultna vrednost biti definisana pre obavezne
function zbirKvadrata3(a, b = 0) {
  return a ** 2 + b ** 2;
}
console.log(zbirKvadrata3(5));
console.log(zbirKvadrata3(5, 1));

// jos jedan nacin definisanja funkcije preko function keyword:

const aritmetickaSredina = function (par1 = 1, par2 = 1, par3 = 1) {
  return (par1 + par2 + par3) / 3;
};

console.log(aritmetickaSredina(4, 5, 3));
console.log(aritmetickaSredina(4, 5));
console.log(aritmetickaSredina());


//======================================================================================================//
// e

function povrsina(a=1,b=1){
    if(a===b){
        return a*b + " ova dva broja su ista"
    }else{
        return a*b + " razlicita su ova dva broja"
    }
}
console.log(povrsina(3,3))
console.log(povrsina(3,4))