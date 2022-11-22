let recenica = "Omare jesi li spremio test ?";
const duzina = recenica.length;
let novaRecenica = 0
let brojac = 0;
for (let i = 0; i < duzina; i++) {
  if (recenica[i] !== " ") {
    novaRecenica += recenica[i];
    brojac++;
  }
}
console.log(brojac);

// =====================================================================================================================//

const recenica2 = prompt("Unesite neki string")
let novaRecenica2 = ""
//jos malo pa pocinje drugi ciklus hihiha