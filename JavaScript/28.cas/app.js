// Date Objects //

// Kreranje datuma:

// Kreiranje se vrsi preko new keyword

// Kreiranje datuma mozemo izvrsiti na 4 nacina:

// 1. nex Date()

const trenutnoVreme = new Date();
console.log(trenutnoVreme);

// 2. newDate(year, month, day, hour, minute, second, miliseconds)

// meseci  se recunaju od 0 do 11

// ako pravimo datume na ovaj nacin moramo imati min 2 arguenta , a max 7 

const datum = new Date(2007,9,23,8,2,1, 8)
console.log(datum)

const datum1 = new Date (2007,7)
console.log(datum1)

// 3. Nacin - slanje jednog argumenta i vracanje defaultne vrednosti 1970 god zajdeno sa argumentom. Argument predstalja milisekunde.

datum2 = new Date(2022)
console.log(datum2)

// 4. nacin - Slanjem stringa u Date() kao argument. String ce biti parse-ovan i dobicemo datum na osnovu toga

datum3 =new Date()

// Jednai dve cifre godine ce biti interpretirane kao:
// 19xx ili 190x
datum = new Date(86,0)
console.log(datum)

datum = new Date(6,0)
console.log(datum)
 
// Date.now

const  datum2 = Date.now ()
console.log(datum2)// daje nam trenutno vreme ali zapisano u milisekindama izmedju danasnjeg datuma i defaultong datuma.

// vraca nam broj ms od 1.1.1970. do poslatog datumas
console.log(Date.parse(datum))


// domaci

// const date1 = new Date(1999,5,24)
// const date2 = new Date(2004,9,15)
// console.log(date1.parse(date2))