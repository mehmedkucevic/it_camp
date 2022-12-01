// replace() metoda vrsi zamenu nekoliko karakera datog stringa. Ima 2 argumenta.
// Podefiniciji replace() metoda menja samo prvo pronalzaenje datog stringa

const recenica = "danas smo podelili sertifikate za HTML,CSS i JavaScript";

let recenica2 = recenica.replace("danas", "Juce");
console.log(recenica2);

// recenica2 = recenica.replace("s", "t");
// console.log(recenica2);

//======================================================================================//

// Za promenu svih pronalazenja datog stringa cemo koristiti Regular Expressions:
// 1. g (global)
recenica2 = recenica.replace(/s/g, "t");
console.log(recenica2);

// 1.i(insensitive)
recenica2 = recenica.replace(/s/i, "A");
console.log(recenica2);

recenica2 = recenica.replace(/s/gi, "A");
console.log(recenica2);

// toUpperCase() metoda za pretvaranja celog stringa u velika slova.
console.log(recenica.toUpperCase());

// toLowerCase() metoda za pretvaranja celog stringa u mala slova.
console.log(recenica.toLowerCase());
console.log(recenica);

// concat() metoda vrsi spajanje dva ili vise  stringova.

let a = "Danas je 16. cas JavaScripta.";
let b = "Bice JavaScripta i preko 50 casova";
// varijanta bez concat()
let c = a + " " + b;
console.log(c);

// varijanta sa concat metodom
c = a.concat(b);
console.log(c);

c = a.concat(" ", b, "\nNakon toga cemo raditi React biblioteku");
console.log(c);

// Napomena.

// Napraviti funkciju koja kod stringa  koji preddstavlja argument funkcije ispituje sledece
// ako dati string ima vecu duzinu od 9 :
// pravi novi string koji ce biti isecak od pola do kraja originalnog stringa. nakon toga novom stringu menjamo sva mala slova a sa velikim slovom "B" i funkcija ce da vrati novi string koji je sastavljen od " Ovo je novodobijena recenica.",i poslednjeg izmenjenog  isecka
// ako string ima duzinu <=9
// funckija treba vratiti poruku:
// argument + {njena duzina} + "nedovoljno za dalje ispitivanje"

const mojaFukncija = function (recenica) {
  if (recenica.length > 9) {
    let polaDuzine;
    // if (recenica.length % 2 === 0) {
    //   polaDuzine = recenica.length / 2;
    // } else if (recenica.length % 2 !== 0) {
    //   polaDuzine = Math.ceil(recenica.length / 2);
    // }
    polaDuzine =
      recenica.length % 2 === 0
        ? recenica.length / 2
        : Math.ceil(recenica.length / 2);
    const isecak = recenica.slice(polaDuzine, recenica.length);
    const novaRecenica = isecak.replace(/a/g, "B");
    const konacno = "Ovo je novodobijena recenica, ".concat(novaRecenica);
    return konacno;
  } else {
    const recenica2 = recenica.concat(
      recenica.length,
      "nedovoljno za dalje ispitivanje."
    );
    return recenica2;
  }
};

console.log(mojaFukncija("Kraj casa"));
console.log(mojaFukncija("Kraj 2. casa rada sa stringovima."));


// domaci zadatak (pogledaj github.....)




//napravitu funkciju koja trazi od korisnika da unese neku recenicu zatim funkcija vraca ,

// datu recenicu u vise oblika (spojenu u jedan string).
//1.recenicu ispisanim velikim slovima.
//2. recenicu ispisanu malim slovima 
//3.pola recenice ispisano velikim slovima pola recenice ispisano malim slovima

//4.ako su recenici nadje rec skola neka bude zamenjena recju fakultet, 
//5. neka bude ispisano prvih 10 karaktera unete recenice , 
//6. neka bude ispisano poslednjih 10 karaktera unete recenice.








