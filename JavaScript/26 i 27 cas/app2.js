function blizi(prvi, drugi) {
  if (prvi != drugi) {
    prviBroj = Math.abs(prvi - 100);
    drugiBroj = Math.abs(drugi - 100);
    if (prviBroj < drugiBroj) return `Prvi broj je blizi broju 100.`;
  } else if (drugiBroj < prviBroj) {
    return `Drugi broj je blizi broju 100.`;
  }
}
console.log(blizi(99, 102));
console.log(blizi(78, 101));

// ======================================================================== //

function distance(x1, y1, x2, y2) {
  return Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
}

console.log(distance(1, 1, 4, 5));

//====================================================================================//

// function pobednik(takmicar1, takmicar2) {
//   const t1Poeni = takmicar1.informatika + takmicar1.matematika;
//   const t2Poeni = takmicar2.informatika + takmicar2.matematika;

//   if (t1Poeni > t2Poeni) {
//     return 1;
//   } else if (t2Poeni > t1Poeni) {
//     return 2;
//   } else {
//     return 1;
//   }
// }

// const takmicar1 = { informatika: 80, matematika: 90 };
// const takmicar2 = { informatika: 70, matematika: 100 };

// console.log(pobednik(takmicar1, takmicar2));

function BOLJI(t1Informatika, t1Matematika, t2Informatika, t2Matematika) {
  const t1Poeni = t1Informatika + t1Matematika;
  const t2Poeni = t2Informatika + t2Matematika;

  if (t1Poeni > t2Poeni) {
    return 1;
  } else if (t2Poeni > t1Poeni) {
    return 2;
  } else {
    return 1;
  }
}

console.log(BOLJI(40, 30, 40, 30));
console.log(BOLJI(30, 35, 25, 40));

// Write a JavaScript function  to get the greatest common divisor() of two intigers

const nzd = (a, b) => {
  // const manji = a <  b ? a : b
  let manji = Math.min(a, b);
  let zeljeniBroj;
  while (manji >= 1) {
    if (a % manji === 0 && b % manji === 0) {
      zeljeniBroj = manji;
      break;
    }
    manji--;
  }
  return zeljeniBroj;
};
console.log(nzd(10, 15));
console.log(nzd(15, 10));
console.log(nzd(5, 10));
console.log(nzd(4, 9));

