// JS objekti su mutable (promenljivi)

// const dzenan = {
//   ime: "Dzenan",
//   prezime: "Mecinovic",
//   godine: 19,
// };

// const dzenan2 = dzenan;

// console.log(dzenan2);
// dzenan2.prezime = "Kosuta";
// dzenan2.godine = 26;
// console.log(dzenan2);
// console.log(dzenan);

// brisanje svojstava iz objekta:

// const person = {
//   ime: "Mitar",
//   prezime: "Vranic",
//   godine: 20,
//   skola: "Prva Tehnicka",
// };
// delete Mitar.skola;
// delete obj.property brise i key i value
// console.log(mitar);

// delete mitar["skola"];
// 
// NAPOMENA
// Vrednosti nekog objekta mogu biti
// Objekti
// Funkcije
// Nizovi...

// Konvertovanje objekta u niz :
// Object.values(obj)
// const niz = Object.values(mitar);
// console.log(niz);

// dodavanje novih svojstava:
// mitar.punoletnost = true;
// console.log(mitar);
// clearTimeout
const myCar = {
  id: 1,
  marka: "Audi",
  model: "a4",
  boja: "Crvena",
  pogon: "prednji",
  menjac: "automatski",
  kontakt: [0622222, 02033322],
  servis: {
    datum: "04,maj",
    km: 23000,
    serviser: "Pasovic",
  },
  udaran: true,
};

myCar.trenutnaBrzina = 0;
myCar.maksimalnaBrzina = 260;
myCar.povecanjeBrzine = function (ubrzanje) {
  if (this.trenutnaBrzina + ubrzanje > this.maksimalnaBrzina) {
    return ` nije moguce voziti preko maksimalne brzine`;
  } else {
    this.trenutnaBrzina += ubrzanje;
  }
};
myCar.povecanjeBrzine(30)
console.log(myCar)

myCar.smanjenjeBrzine = function (smanjenje){
    if(this.trenutnaBrzina - smanjenje < 0){
        return ` ne mozete smanjiti brzinu za tu vrednost`
    }else{
        this.trenutnaBrzina -=smanjenje
    }
}
console.log(myCar.smanjenjeBrzine(40))
console.log(myCar.smanjenjeBrzine(25))
console.log(myCar)
myCar.koci= function (){
    this.trenutnaBrzina = 0
}
myCar.koci()
console.log(myCar)
////
// Domaci zadatak:
// // Napraviti objekat sa sledecim svojstvima:
// 1. firstName,
// 2. lastName,
// 3. language,
// 4. setLanguage - metoda za setovanje jezika,
// 5. setNickName - metoda (svaka osoba ima nadimak sastavljen od prva dva slova
// imena i prva dva slova prezimena)

