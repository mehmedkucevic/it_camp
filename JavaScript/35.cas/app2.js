brojevi = [2, 3, 4, 5, 6, 8];
const brojevi1 = brojevi.map((element, index) => {
  if (index === 0 || index === 3 || index === 5) {
    return element ** 2;
  } else {
    return;
  }
});
console.log(brojevi1);

// II

