function position(a, b) {
  const pomocniB = b.filter((element) => element < a.length);
  const noviArr = [];

  for (let i = 0; i < a.length; i++) {
    noviArr.push(a[pomocniB[i]]);
  }
  return noviArr;
}
console.log(position([100, 101, 102], [1, 1, 2]));

////////////////////////////////////////////////////////////////////////////////////

function counter(arr) {
  let brojac = 0;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] === 2 * arr[i - 1] && arr[i] === arr[i + 1] - 10) {
    brojac ++
    }
  }
  return brojac
}

console.log(counter([10,20,30,60,70]))