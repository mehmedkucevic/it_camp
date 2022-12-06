// 1. domaci

const sumaCifara = (broj) => {
  if (isNaN(broj) || broj < 1000 || broj > 9999) {
    return "argument nije korektan";
  } else {
    const cifraJedinice = broj % 10;
    const cifraDesetice = Math.trunc((broj % 100) / 10);
    const cifraStotine = Math.trunc((broj % 1000) / 100);
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

console.log(sumaCifara(1212));

// 2. domaci

const funkcija1 = (flasa1, balon1) => {
  if (isNaN(flasa1) || isNaN(balon1)) return "los unos";
  else if (balon1 < 0 || balon1 > 50 || flasa1 < 0 || flasa1 > 5)
    return "unos nije dobar";
  brojac = Math.floor(balon1 / flasa1);
  return (
    "od flasa od " +
    flasa1 +
    " litara i bureta koje ima " +
    balon1 +
    " litara\nMoze se naprviti " +
    brojac +
    " flasa"
  );
};
console.log(funkcija1(2, 51));
