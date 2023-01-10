// III nacin

function maxElement(niz) {
    let max = Number.NEGATIVE_INFINITY
for(let broj of niz ){
    if(broj>max){
    max = broj
    }
}
return max
}

console.log(maxElement(brojevi))
