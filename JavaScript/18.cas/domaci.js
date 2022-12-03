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
