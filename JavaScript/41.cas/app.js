// JSON - JavaScript Object Notation //

// JSON je format za skladistenje i prenos podataka
// Najcesce se koristi kada se podai salju servera ka WEB stranici

// JSON podaci su vrlo slicni JavaScript objektu i oni se zapisuju:
// const person = {
//   "firstName": "amer",
//   "lastName": "honic",
//   "age": 19
// };
//keys/names zahtevaju duple navodnike za razliku od JavaScript objekta

// dve metode za pretvaranje:
// 1. JSON.stringfy()
// JSON.stringfy() pretvara nas objekat u JSON format pa JSON u string
// Koristi se za slanje podataka..
const strObj = JSON.stringify(person)
console.log(strObj)
console.log(typeof strObj)
// 2. JSON.parse()
// Analizira se neki string i u slucaju mogucnosti pretvara u objekat (nama )
 const obj = JSON.parse(strObj)
 console.log(obj)
