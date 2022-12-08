

function cokoladica(var1,var2){
    const poklon = Math.trunc(var2/var1);
    if(var2 <= 0 || var2 > 1000 || isNaN(var2)){
        return "Najvise moze da 1000 cokoladica i  ne sme ih nema!!!"
    } 
    else if(var1 <= 0 || var1 > 20 || isNaN(var1)){
        return "Mora da ima od 1 do 20 cokoladica u poklonu i nista drugo!"
    }
    else
    return `Od ${var2} cokoladica moze da se spakuje ${poklon} poklona sa ${var1} cokoladica.`
}
console.log(cokoladica(13,1001))
console.log(cokoladica(13,109))
