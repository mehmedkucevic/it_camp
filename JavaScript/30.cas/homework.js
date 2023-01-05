function countElements(array) {
  var result = {
    string: 0,
    number: 0,
    boolean: 0,
    array: 0,
  };
  for (var i = 0; i < array.length; i++) {
    if (typeof array[i] === "string") {
      result.string++;
    }
    if (typeof array[i] === "number") {
      result.number++;
    }
    if (typeof array[i] === "boolean") {
      result.boolean++;
    }
    if (Array.isArray(array[i])) {
      result.array++;
    }
  }
  return result;
}

console.log(
  countElements([
    "jagoda",
    25,
    true,
    "mandarina",
    [1, 2, 3],
    "ananas",
    49,
    694,
    "tresnja",
  ])
);
