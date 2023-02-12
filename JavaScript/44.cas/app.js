const amer = {
  firstName: "Amer",
  lastName: "Honic",
  age: 19,
  fullName: function () {
    return `${this.firstName} ${this.lastName}`;
  },
};
const emin = {
  firstName: "Emin",
  lastName: "Zukanovic",
  age: 19,
};

// Pozivanje neke funkcije za odredjeni objekat se moze izvrsiti pomocu funkcija:
// 1. call ()
// 2. apply ()
// 3. bind ()

// Prvo treba pristupiti funkciji, pa onda objasniti na kom se objektu treba primeniti

console.log(amer.fullName.call(emin));

// 2. primer

const restoran1 = {
  hrana: "Spaghetti",
  gosti: "veoma zadovolnji",
  lokacija: "Stevana Nemanje, 64",
};

const restoran2 = {
  hrana: "burek",
  gosti: "zgadjeni",
  lokacija: "Stanice Spasojevic, 62",
};

function poruka (mesto, drzava)  {
  return `Vecerasnji specijalitet u nasem restoranu je bio ${this.hrana}. Nasi gosti su ${this.gosti}, te srecni zbog toga.\n Nalazimo se u ulici ${this.lokacija}, u ${mesto}, ${drzava}.`;
};

//call () metoda za prvi argument ima objekat na koji se primenjuje a ostali argumenti su argumenti metode koja se izrsava

console.log( poruka.call(restoran1, "Novi Pazar", "Srbija") )

// apply() metoda za prvi argument ima objekat na koji se primenjuje, drugi argument je niz gde smestamo argumente metode koja se izvrsava

console.log(poruka.apply(restoran2,["Sarajevo","Bosna"]))

// bind () zahteva prethocdno definisanje promenljive (funkcije) za odredjeni objekat, pa onda pozivanje funkcije sa eventualnim argumentima

const bindFunction = poruka.bind(restoran1)
console.log(bindFunction("Novi Sad", "Srbija"))

function value () {
    
}

