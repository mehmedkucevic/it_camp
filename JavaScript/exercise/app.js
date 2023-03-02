

function isString (txt){
    const str = txt.toString()
    if(txt === str ){
        return "Poslati argument je string"
    } else if(txt !== str ){
return "Poslati argument nije string"
    }
}
console.log(isString(12))
console.log(isString("string"))
console.log(isString([1,2,"secer"]))
