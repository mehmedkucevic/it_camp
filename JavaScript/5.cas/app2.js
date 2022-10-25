// KONDICIONALI //

// if (uslov1) {
// kod za izvrsavanje uslucaju ispunjenja 1. uslova
// }else if(uslov2) {
// kod za izvrsavanje uslucaju ispunjenja 2. uslova
// }else {
// kod za izvrsavanje u slucaju ne izvrsavanja svih predhodnih uslova
// }

// Ako je broj godina unet od strane korisnika >= 18, neka se ispise poruka punoletni ste u suprotnom maloletni ste

const godine = Number(prompt("Unesite broj godina: "));
if (godine >= 18) {
  console.log("Punoletni ste.");
} else if (godine < 18 && godine > 0) {
  console.log("Maloletni ste");
} else if (godine < 0) {
  console.log("Broj godina se ne moze biti negativan");
} else {
  console.log("Niste uneli broj godine");
}

const godine1 = Number(prompt("Unesite broj godina: "));

if (godine < 12) {
  console.log("Decije doba");
} else if (godine >= 12 && godine < 18) {
  console.log("Vi ste maloletni");
} else if (godine >= 18 && godine < 40) {
  console.log("Vi ste punoletni");
} else if (godine >= 40) {
  console.log("zrela osoba");
} else {
  console.log("niste uneli broj godina");
}

// Switch naredba (moramo definistati tacnu vrednost kod izraza da bi se taj blok koda izvrsio)
// Sintaksa:
// switch (izraz) {
//   case x:
    //blok koda koji se izvrsava u slucaju da je izraz = x
    // break;
  // break se ne sme izostavitin jere bi se izvrsio kod narednog slucaja...
//   case y:
    //blok koda koji se izvrsava u slucaju da je izraz = y
    // break;
//   case z:
    // blok koda koji se izvrsava u slucaju da je izraz = z
    // break;
//   default:
  //blok koda koji se izvrasava u slucaju da izraz nije jednak ni x, ni y,ni z
// }

const broj = +prompt("Unesite broj izmdeju 12 i 15: ");

switch (broj) {
  case 12:
    console.log("broj 12");
    break;

  case 13:
    console.log("broj 13");
    break;

  case 14:
    console.log("broj 14");
    break;

  case 15:
    console.log("broj 15");
    break;

    default:
        console.log("niste uneli tacnu vrednost")
}
