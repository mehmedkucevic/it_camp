function large(arr, position) {
  arr.sort((a, b) => b - a);
  return arr[position - 1];
}
console.log(large([1, 2, 4, 5, 6, 7, 8, 9]));

function keyToValues(obj) {
  const keys = Object.keys(obj);
  const values = Object.values(obj);
  const newObj = {};
  for (let i = 0; i <= values.length - 1; i++) {
    newObj[values[i]] = keys[i];
  }
  return newObj;
}

console.log(keyToValues({ name: "qwqw" }));

const student = {
  name: "mehmed",
  sclass: "III",
  bb: "ulica",
};

function objLength (obj){
    const length = Object.keys(obj).length
    return length
}
console.log(objLength(student))