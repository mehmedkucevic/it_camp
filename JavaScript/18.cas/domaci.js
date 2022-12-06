const sumaCifara = (broj) => {
  if (isNaN(broj) || broj < 1000 || broj > 9999) {
    return "argument nije korektan";
  } else {
    const cifraJedinice = broj % 10;
    const cifraDesetice = Math.trunc((broj % 100) / 10) 
    const cifraStotine = Math.trunc((broj % 1000) / 100)
    const cifraHiljade = Math.trunc(broj / 1000);
    return (
      cifraJedinice +
      "\n" +
      cifraDesetice +
      "\n" +
      cifraStotine +
      "\n" +
      cifraHiljade +
      "\n"
    );
  }
};


console.log(sumaCifara(1212))


// II domaci


const funkcija1=(flasa,bure)=>{ 


       if(isNaN(flasa)||isNaN(bure)) return "los unos" 
        else if(bure<0||bure>50||flasa<0||flasa>5) 
         return "los unos" 
          brojac=Math.floor(bure/flasa) 
           return "od flasa od "+flasa+" litara i bureta koje ima "+bure +" litara\nMoze se naprviti "+brojac+" flasa" 


          } 
           console.log(funkcija1(4,51))
