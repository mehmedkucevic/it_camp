// Homework //

// Write a JavaScript function to get the least common multiple () of two numbers.

// function nzs(br1, br2) {
//    let najveci = Math.max(br1, br2);
//   let najmanji = Math.min(br1, br2);
//   while (
//     br1 % najmanji !== 0 ||
//     br2 % najmanji !== 0 ||
//     najveci % br1 !== 0 ||
//     najveci % br2 !== 0
//   ) {
//     return;
//   }
//   najmanji = +najveci;
//   return
// }
// console.log(nzs(4,5))
;
// function oo(br1, br2) {
//   let najveci = br1 > br2 ? br1 : br2;
//   let nzs = najveci;
//   while (nzs % br1 !== 0 || nzs % br2 !== 0) {
//     nzs += najveci;
//   }
//   return;
// }
// console.log(oo(4, 5));

const NZS = (a, b) => {
  let veci = Math.max(a, b);
  let i = veci;
  while (true) {
    if (i % a === 0 && i % b === 0){
        nzs = i;
        break;
    } 
  }i++
  return NZS
};
console.log(NZS(4,6))
