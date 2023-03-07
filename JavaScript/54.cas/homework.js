//

const pr = new Promise ((resolve,reject)=>{
    const rp = "Nesto nesto "
    let brojac = 0
    for(i = 0;i  <= arr.length;i++){
    if(rp[i] === a ||
        rp[i] === e ||
        rp[i] === i ||
        rp[i] === o ||
        rp[i] === u){
            brojac ++
        }
        if(brojac>10){
            resolve("string zadovoljava uslov")
        }else{
            reject("string nije zadovoljio uslov")
    }
    }
})

pr
.then((poruka)=>console.log(poruka))
.catch((poruka)=>console.log(poruka))
.finally((poruka)=>console.log("string je proveren"))