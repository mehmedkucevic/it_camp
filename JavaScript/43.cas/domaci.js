// program to sort array by property name

// function sortiranje(a, b) {
//   const naslov = a.title.toUpperCase();
//   const autor = b.author.toUpperCase();
//   let comparison = 0;

//   if (naslov > autor) {
//     comparison = 1;
//   } else if (naslov < autor) {
//     comparison = -1;
//   }
//   return comparison;
// }

const library = [
  {
    title: "The Road Ahead",
    author: "Bill Gates",
    libraryID: 1254,
  },
  {
    title: "Walter Isaacson",
    author: "Steve Jobs",
    libraryID: 4264,
  },
  {
    title: "Mockingjay: The Final Book of The Hunger Games",
    author: "Suzanne Collins",
    libraryID: 3245,
  },
];
// console.log(students.sort(sortiranje));

// II nacin

const sort2 = (arr) => {
  const newArr = arr.map((element) => element.title);
  newArr.sort();
  const finalArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr.find((element) => element.title === newArr[i])) {
      finalArr.push(arr.find((element) => element.title === newArr[i]));
    }
  }
  return finalArr;
};
console.log(sort2(library));
