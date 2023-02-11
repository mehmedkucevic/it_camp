function position(a, b) {
  const pomocniB = b.filter((element)=> element < a.length);
  const noviArr = [];

  for (let i = 0; i < a.length; i++) {
    noviArr.push(a[pomocniB[i]]) 
  }
  return noviArr;
}
console.log(position([100, 101, 102], [1, 1, 2]));

//////////////////////////////////////////////////////////////////////////////////


