// JavaScript Array Iteration //

// Array Iteration metode prolaze kroz savki element niza

//forEach() metoda poziva callback funkciju za svaki element niza

const niz = ["tarik", "hamed", "emin", "bakir", "dzenan"];

niz.forEach((element) => {
  console.log(element);
});
//forEach() moze imati tri parametra:
// 1. element
// 2. index niza
// 3. ceo niz


// map() metoda kreira novi niz (iste duzine kao i originalan) sa logikom predstavljenom unutar callback funkcije unutar date metode

//  preko petlje napraviti novi niz koji ce imati sve elemene originallnog niza.
// function copy (array){
//     const new1 = []
// for(i=0;i>niz.length; i++){
//  new1[i]+niz[i]
// }
// }
// console.log(new1)

/////////////////////////////////////////////////////////////////////////////////
 const niz3 =  niz.map((student)=> student)
 console.log(niz3)

 // preko map() metode napravi niz gde ce imena svih studenata pocinjati veliki slovom

 const niz4 =  niz.map((student)=> student[0].toUpperCase()+student.slice(1))
 console.log(niz4)

 const brojevi = [ -5,4,3,10,14,-5]
 // napraviti novi niz koji ce sve negativne brojeve pomnoziti sa (-1,) , a sve pozitivne kvadrirati

 // 4.