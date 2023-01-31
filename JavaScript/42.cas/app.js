//Object built in Methods //

const person = {
  firstName: "Hamed",
  lastName: "Medjedovic",
  age: 16,
};

// Object.freeze(obj) metoda cini objekat nepromenljivim
person.age = 17;
console.log(person);
// Object.freeze(person)
// person.age = 22
// console.log(person)

// Object.seal(obj) cini objekat promenljivim s tim sto nema mogucnost dodavanja(brisanja) novih svojstava i metoda
// Object.seal(person)
// person.age = 22
// console.log(person)
// delete person.age
// console.log(person);

// Object.keys(obj) vraca niz kljuceva:
console.log(Object.keys(person));

// Object.entries(obj) vraca niz nizova:
// Svaki podniz je niz od dve elementa.
const entries = Object.entries(person);
console.log(entries);

const newArr = entries.flat().filter((element) => typeof element === "string");
console.log(newArr);

// Object.is(obj) metoda

// Destructuring

const person3 = {
  firstName: "Hasan",
  lastName: "Mujanovic",
  age: "18",
};

// const firstName = person3.firstName
// console.log(firstName)

const{firstName,age } = person3
console.log(firstName)
console.log(age)

const godine = [
{starost:19},
{starost:18},
{starost:17},
{starost:16},
{starost:15},
{starost:20},
{starost:18},
{starost:21},
]
const punoletnost = godine.filter((starost) => starost <= 18 )
console.log(punoletnost)