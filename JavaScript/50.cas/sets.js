// JavaScript Set je kolekcija unikatnih vrednosti

const mySet = new Set([14, "it camp", true, [1, 2, 3, 5]]);
console.log(mySet);

// Metode Setova:

// 1. Za kreiranje elemenata koristimo new Set ([])

// 2. Dodavanje elemenata koristimo add() metodu

mySet.add(false);
console.log(mySet);

// 3. Za brisanje elemenata koristimo delete(vrednost elemeneta) metodu
mySet.delete(true);
console.log(mySet);

// 4. Za proveru da li set sadrzi odredjenu vrednost koristimo has() metodu

console.log(mySet.has(false));

// 5. foreach() metoda sluzi za kroz set
mySet.forEach((el) => console.log(el));

// 6. values () metoda nam vraca interator sa vrednstima seta:

console.log(mySet.values());

// Za proveru duzine seta koristi se size property

console.log(mySet.size);

////////////////////////////////////////////////////////////////////////////////////

// 1. nacin

function newArr(arr) {
  const newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (!newArr.includes(arr[i])) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}
console.log(newArr([1, 1, 1, 2, 3, 4, 4, 5, 5]));

// 2. nacin

function newArr2(arr) {
  const newSet = new Set(arr);
  const newArr = [...newSet];
  return newArr;
}
console.log(newArr2([1, 2, 3, 4, 4, 4, 5, 5, 2, 1]));

// Mape u JavaScriptu sadrze key-value parove gde keys (kljucevi) mogu biti bilo kod tipa podatka.
// Mape pamte orginalni redosled elemenata.

const myMap = new Map([
  ["apple", 60],
  ["orange", 198],
]);
console.log(myMap);

// Glavne metode kod Map-a :

// 1. Za kreiranje nove mape koristi se newMap

// 2. Za setovanje vrednosti koristimo set()

// Pravljenje novog key-value para
myMap.set("strawberry", 240);
console.log(myMap);

// Izmena vrednosti za postojeci key
myMap.set(false, 0);
console.log(myMap);

// 3. get() metoda se koristi za  dobijanje vrednosti odredjenog kljuca

console.log(myMap.get("apple"));

// 4. delete() metoda se koristi za brisanje key-value para

myMap.delete("orange");
console.log(myMap);

// 5. has() metoda proverava na osnovu kljuca da li je odredjeni key-value par prisutan u mapi

console.log(myMap.has(true));
console.log(myMap.has("pineapple"));

// 6. forEach() metoda nam sluzi za iteraciju kroz mapu

myMap.forEach((el) => console.log(el));

// 7. entries() metoda

// 8.

function events(map) {
  const events = [...new Set(map.values())];
  return entries;
}
console.log(events);
