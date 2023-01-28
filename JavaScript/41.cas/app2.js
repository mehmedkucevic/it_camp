// JS objekti su mutable (promenljivi)

const dzenan = {
  ime: "Dzenan",
  prezime: "Mecinovic",
  godine: 19,
};

const dzenan2 = dzenan;

console.log(dzenan2);
dzenan2.prezime = "Kosuta";
dzenan2.godine = 26;
console.log(dzenan2);
console.log(dzenan);

// brisanje svojstava iz objekta:

const person = {
  ime: "Mitar",
  prezime: "Vranic",
  godine: 20,
  skola: "Prva Tehnicka",
};
delete mitar.skola;
// delete obj.property brise i key i value
console.log(mitar);

delete mitar["skola"];

// NAPOMENA
// Vrednosti nekog objekta mogu biti
// Objekti
// Funkcije
// Nizovi...

// Konvertovanje objekta u niz :
// Object.values(obj)
const niz = Object.values(mitar);
console.log(niz);

// dodavanje novih svojstava:
mitar.punoletnost = true;
console.log(mitar);

const myCar = {};

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