function countElements(arr) {
  var result = {
    string: 0,
    number: 0,
    boolean: 0,
    array: 0,
  };
  for (var i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "string") {
      result.string++;
    }
    if (typeof arr[i] === "number") {
      result.number++;
    }
    if (typeof arr[i] === "boolean") {
      result.boolean++;
    }
    if (Array.isArray(arr[i])) {
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
