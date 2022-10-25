// OPERATORI U JAVASCRIPTU //
// Podelicemo operatore u 6 grupa:

//  1. Aritmeticki operatori (Artimetic operators);
//  2. Operatori dodele vrednosti (Assigment operators);
//  3. String operatori (String operators);
//  4. Operatori poredjenja (Comparison operators);
//  5. Logicki operatori (Logical operators);
//  6. Tip operatori (Type operators).

//  1. Aritmeticki operatori (Artimetic operators);
//  1.1  + operator sabiranja
console.log(4 + 5);
//  1.2  - operator oduzimanja
console.log(4 - 5);
//  1.3  * operator mnozenja
console.log(4 * 5);
//  1.4  / operator deljenja
console.log(20 / 5);
//  1.5  ** operator stepenovanja
console.log(2 ** 3);
//  1.6  % Modulo (ostatak pri deljenju dva broja)
console.log(11 % 3); // 2
console.log(12 % 3); // 0

// Uslov za parnost:
// i % 2 = 0
// Uslov za neparnost:
// i % 2 = 1

//  1.7  ++ Increment (Povecava vrednost za 1)
let x = 5;
// postfiksni operator
x++; // x = x + 1
console.log(x);

let y = 11;
// prefiksni operator
console.log(++y);

//  1.8  -- Decrement (Smanjuje vrednost za 1)
let z = 99;
// postfiksni operator
z--; // z = z - 1
console.log(z);

let w = 65;
// prefiksni operator
console.log(--w);

//2.1 - dodeljivanje vrednosti nekoj promenljivoj
//2.2
//2.7 **= - stepenovanje odredjene vredosti na posjecu promenljivu

y **= 2;
console.log(y);

// 3. String operatori ( String operators)
// Jedan od nacina za spajanje stringova je koriscenjem + operatora.

let prviDeo = "Danas je Omar";
let drugiDeo = "doneo pizzu";
console.log(prviDeo + " " + drugiDeo);
console.log(Boolean(prviDeo + " " + drugiDeo));

// Neki slucajevi kod sabiranja 
console.log("Omar" + 3); //rezultat spajanja stringa i broja daje string
console.log(3 +"Omar");
console.log(typeof(3 +"Omar"));
console.log(3 + "2") //Bez obzira sto 2 moze biti pretvorena u korektan broj, nece se izvrsiti sabiranje

console.log(4 - "2");//2
console.log(4 * "2");//8
console.log("3" / 1);//3
console.log(2 ** "3");//8
//Ako JavaScript ne uspe da prevede string u broj , rezultat ce biti NaN
console.log(21 / "7dana"); //NaN (Not a Number )je vrednost za nekorektan broj


// 4. Operatori poredjenja (Comprasion operators);
// 4.1  ==  -  provera jednakosti i vrednosti 
 
let a =5;
let b =7;
let c =a;

console.log(a == c)
console.log(a == b)

c += 2;
console.log(c); // ima novu vrednost 7
console.log(a); // ostaje na staru vrednost 5

// 4.2 ===   - proverava jednakost tipa i jednakost vrednosti
// BOLJE KORISTI ===
let d = "5"
console.log(a == d)
console.log(a === d); // pritom proverava i tip 
 
// 4.3  !=  proverava razlicitost vrednosti 

console.log(b != c)

// 4.4  !==   ispituje da li je razlicita vrednsot ili razliciti tip 
console.log(a !== d)  

// 4.5  >     da li je prva vrednost veca od druge:

console.log(b > c)

// 4.6  <      da li je prvi vrednost manja od druge:

console.log(14 < -19)

//4.7  >=      da li je prva vrednost veca ili jednaka drugoj:

console.log(9 >= 9)

// 4.8  <= da li je prva vrednost manja ili jednaka drugoj:

console.log(9 <= 13)

//4.9  ?   ternarni operator
// uslov ? (radnja koja se izvrsava ako je uslov zadovoljen)
//    :
//         (radnja koja se izvrsava ako uslov nije zadovoljen)

let isSunny = false

isSunny 
? console.log("Vreme je suncano." + "Ponesite naocare!")
: console.log("Vreme je kisovito" + "Ponestie kisobran!");


//  5. Logicki operator (Logical opetators)

// && - and (i)    zahteva zadovoljavanje svih uslova 

let prom1 = 4
let prom2 = 19
let prom3 = -3

prom1 > 0 && prom2 > 0 && prom3 > 0
? console.log( "sve tri promenljive su pozitivni brojevi")
: console.log(" nisu sve tri promenljive pozitivni brojevi brojevi")

// 5.2 || - or (ili)  zahteva zadovoljavanje bar jednog od ponudjenih uslova

let prom11 = 16
let prom22 = 32
let prom33 = -7

prom11 > 0 || prom22 > 0 || prom33 > 0
? console.log(" nasli smo promenljivu vecu od 0")
: console.log("nema")

// 5.3   !  - not (okrece vrednost => iz true u false i obrnuto)

console.log(!Boolean(prviDeo + " " + drugiDeo));

// 6. Tip opertori (Type operators).

// 6.1  typeof se koristi za ispitivanje tipa odredjene promenljive

isSynny = false;
console.log(typeof isSynny);
// 6.2  instanceof - za proveru da li je neka promenljiva instanca objekta npr.

const obj = {
    ime:"Omar"

}

console.log(obj instanceof Object)
