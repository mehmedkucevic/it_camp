const n = +prompt("Unesite neki prirodan broj: ")
let brojac = 0
let suma = 0
for(let broj = 1; broj <= n; broj++){
if (broj % 5===0){
    brojac++
    suma += broj
}
}
console.log("Ukupno ima" + brojac + "brojeva koji su deljivi sa 5, \n a njihova suma je" + suma +" ")

for(let i = 99; i >= -99; i--){
if(i%4===0){
    console.log(i+14)   
}
}

let number = 3

while(number<18){

}



console.log("aritmeticka sredina brojeva sa 3, iz intervala [3,17] je " + sum/counter)
