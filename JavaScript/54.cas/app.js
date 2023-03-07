function devide(a, b) {
  try {
    if (b === 0) {
      throw new Error("Deljenje nulom nije moguce");
    }
    return a / b;
  } catch (error) {
    console.log(error.message);
  } finally {
    console.log("ovo je bila funkcija koja deli dva broja");
  }
}

console.log(devide(10, 5));
console.log(devide(10, 0));

console.log("1");
console.log("2");

setTimeout(() => {
  console.log("3");
}, 1000);
setTimeout(() => {
  console.log("4");
});
setTimeout(() => {
  console.log("5");
}, 900);

// Promise je JS objekat koji predstavlja mesto za rezultate asihrone funkcije sve dok traje izvrsavanje asihrnohih operacija

// const cizburger = new Promise((reslove, reject) => {
//   const response = 200;
//   if (response <= 200 && response < 300) {
//     reslove();
//   } else {
//     reject();
//   }
// });

// cizburger
//   .then(() => console.log("Dobio sam cizburger."))
//   .catch(() => console.log("Nisam cizburger."))
//   .finally(() => console.log("Obecanje je izvrseno."));

const arr = new Promise((reslove, reject) => {
  const response = 200;
  if (response <= 200 && response < 300) {
    reslove([1, 2, 4, 5, 6, 7]);
  } else {
    reject("nije dobro");
  }
});

// Chain efekat se postize tako sto se vrednost koja treba biti koriscena u narednoj callback funkciji then metode se mora naci u return prethodne callback funckije, prethodne then metode

arr
  .then((arr) => {
    console.log(`Dobili smo ${niz} `);
    const parni = niz.filter((br) => br % 2 === 0);
    return parni;
  })
  .then((noviNiz) => console.log(`Filtriran niz je ${noviNiz}`))
  .catch((message) => console.log(message));


  