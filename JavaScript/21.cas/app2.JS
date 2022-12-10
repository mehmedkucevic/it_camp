// 1. zadatak

// function prvaIPoslednja(recenica){

//     const prviRazmak=recenica.indexOf(" ")
//     const prvaRec = recenica.slice(0,prviRazmak)
//     const zadnjiRazmak  = recenica.lastIndexOf(" ")
//     const zadnjaRec = recenica.slice(zadnjiRazmak)
//     let rec2 = prvaRec.concat(" ", zadnjaRec)
//     return rec2
// }
// console.log(prvaIPoslednja("Hocemo prvu i poslednju rec"))

// function podString (string,pocetak,duzina){
//     const noviString = string.substr(pocetak,duzina)
//     return noviString
// }
// console.log(podString("asdasdasdasd",8,9))

// function izbacivanje(string, karakter) {
//   const novi1 = string.replace(karakter, "");
//   return novi1;
// }
// console.log(izbacivanje("qwwweee", "q"));

const bez = (string, znak) => {
  let novi = "";
  for (let i = 0; i < string; i++) {
    if (string[i] !== znak) {
      novi += string[i];
    }
  }
  return novi;
};
console.log(bez("madagaskar", "a"));
