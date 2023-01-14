// napravi funkciju koja pravi novi niz gde ce se pozitivni elementi kvadrirati, a negativni pomnoziti sa (-1), a ako se neki element pojavljuje vise puta u org nizu , na svako sledece pojavljivanje ce se u novom nizu dodati element "ovde je bio duplikat"

const second = (arr) => {
  const newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr.slice(0, i).includes(arr[1])) {
      newArr.push("ovde je bio duplikat");
    } else if (arr[1] < 0) {
      newArr.push(-arr[1]);
    } else {
      newArr.push(arr[i] ** 2);
    }
  }
  return newArr;
};
console.log(second([5, 3, 5, 3]));
