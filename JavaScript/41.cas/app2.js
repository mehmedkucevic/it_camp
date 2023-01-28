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


const myCar = {
    
}