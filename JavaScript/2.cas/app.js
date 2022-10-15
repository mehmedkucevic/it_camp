//JavaScript moze prikazati podatke na nekoliko nacina:

//1. innerHTML
document.getElementById("p").innerHTML = "Paragraf"

//2. write()
document.write() //najcesci nazin za testiranje nekog koda

//3. alert()
alert("Zdravo")

//4. console.log() - ispisivanje u konzoli
console.log("poruka ispisana u konzoli.")

// Pravila nazivanja promenljivih :

// Promenljiva u JavaScriptu mora poceti sa nekim od sledecih znakova
// 1. Slovo (veliko ili malo, svejedno) A-Z, a-z
// 2. $ znak moze biti pocetni karatker neke promenljive
// 3. _ takodje moze poceti

// Broj moze biti sadzran u nazivu neke promenljive, ali promenljvane sme poceti sa brojem.

// prom1 = "neki string"  jeste korektan nacin
// 2prom1 = "neki string" nije korektan nacin nazivanja promenljive

// prosek ocena = 4.14 nije korektno
prosekOcena = 4.14 // preporucljiv nacin zapisivanja neke promenljive
prosek_ocena = 4.14 // korektno
ProsekOcena = 4.14 // korektno

// Postoje 4 nacina za deklarisanje neke promenljive:
// 1.dodeljivanje vrednosti bez da smo prethodno izvrsili deklaraciju
//  prom = 12 

// 2. koriscenje var keyword (rezervisane reci) -  var je koriscena na starijim browserima ( sve se manje koristi)
// var a = 5

// 3. let keyword (rezervisana reci) - let se najcesce koristi kada postoji sansa da se vrednost date  promenljive menja.

// 4. Kosiscenjem const keyword (rezervisane reci) - const se najcesce koristi za definisanje konstanti koje nece menjati vrednost.

// Promenljive (varijable) predstavljaju kontejnere za skladistenje vrednosti.