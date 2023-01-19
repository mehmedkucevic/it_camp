const arr1 = [3, "a", "a", "a", 2, 3, "a", 3, "a", 2, 4, 9, 3];

// I zadatak

function positive(arr) {
  const suma = arr
    .filter(function (element) {
      return element % 2 === 0;
    })
    .reduce((prvi, drugi) => prvi + drugi);
  return suma;
}
console.log(positive([1, 2, 3, 4]));

// II zadatak

function sum(arr) {
  const par = [];
  for (i of arr) {
    if (i % 2 === 0) {
      par.push(i);
    }
  }
  const suma = par
    .map((element) => element * element)
    .reduce((prvi, drugi) => prvi + drugi);
  return `parni su [${par}] a  suma kada se pomnoze samim sobom iznosi ${suma}.`;
}
console.log(sum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

// III zadatak

function numLoop(arrr) {
  let element;
  let numRepeat = 1;
  let counter = 0;
  for (let i = 0; i < arrr.length; i++) {
    for (let j = i; j < arrr.length; j++) {
      if (arrr[i] === arrr[j]) {
        counter++;
        if (numRepeat < counter) {
          numRepeat = counter;
          element = arrr[i];
        }
      }
    }
    counter = 0;
  }
  return `${element} pojavljuje se ${numRepeat} puta.`;
}
console.log(numLoop([1, 2, 3, 4, 5, 6, 2, 2]));
