//split() metode nam vraca niz na osnovu nekog stringa na koji je primenjena.

const recenica =
  "ovde je prilicno hladno jer smo dobili obecanje da ce uskoro poceti grejanje. Ako se to ne desi, bice odlaganja casova";

// ako se kod split metode izostavi argument, dobicemo niz od  jednog elementa.
const niz = recenica.split();
console.log(niz);

const niz2 = recenica.split(",");
console.log(niz2);

//napraviti niz od stringa tako da se elementi niza prave do svake reci "decembar " . rec "decembar" ne sme biti deo nijednog elementa niza

const recenica2 =
  "Decembar je poslednji dan u godini. u decembar pocinje zima, decembar je najhladniji mesec u godini";

const niz3 = recenica2.split(/decembar/i);
console.log(niz3);

// Search metode:

// indexOf() metoda nam varca prvu poziziciju gde se zapravo nalazi poslati argument (jedan ili vise karaktera) kada se radi o nekom stringu

const pozicija = recenica2.indexOf("j");
console.log(pozicija);

const pozicija2 = recenica2;

// ako trazimo poziciju neku rec ili bilo sta stom se ne nalazi unutar naseg stringa, kao rezultat dobijamo broj -1

// Drugi argument predstavlja poziciju od koje krecemo sa trazenjem stringa
const pozicija4 = recenica2.indexOf("mesec", 30);
console.log(pozicija4);

//lastIndexOf() metoda nam vraca poslednju poziciju gde se zapravo nalazi poslati argument (jedan ili vise karaktera) kada se radi o nekom stringu

const pozicija5 = recenica2.lastIndexOf("mesec");
console.log(pozicija5);

// ako trazimo poziciju neku rec ili bilo sta stom se ne nalazi unutar naseg stringa, kao rezultat dobijamo broj -1
const pozicija6 = recenica2.lastIndexOf("ima li ovo");
console.log(pozicija5);

// Napraviti funk koja na osnovu parametra ispituje pojvljivanje reci "ko osvaja"

// ako se pojavljuje vise puta dati string vatiti poziciju prvog i poslednjeg pojavljivanja, ako se pojavljuje jednom vratiti poziciju ponavljivanja, ako se ne pojavljuje ispisati poruku nismo pronasli dati string

function position(sentence) {
  const firstApp = sentence.indexOf("ko osvaja");
  const lastApp = sentence.lastIndexOf("ko osvaja");
  if (firstApp === -1) {
    return "nismo pronasli dati string";
  } else if (firstApp === lastApp) {
    return "Reci 'ko osvaja' se nalaze 1 u datoj recenici";
  }else if (firstApp !== lastApp){
    return "Prvo pojavljivanje reci ' ko osvaja' se nalazi na "+ firstApp +"poziciji.\nPoslednje pojavljivanje reci 'ko osvaja' se nalazi na "+ lastApp+"poziciji"
  }
}
console.log(position("ko osvaja svetsko pprvenstvo stvarno ko osvaja?"))
