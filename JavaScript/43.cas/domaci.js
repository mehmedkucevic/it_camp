// program to sort array by property name

function sortiranje(a, b) {
  const naslov = a.title.toUpperCase();
  const autor = b.author.toUpperCase();
  let comparison = 0;

  if (naslov > autor) {
    comparison = 1;
  } else if (naslov < autor) {
    comparison = -1;
  }
  return comparison;
}

const students = [
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
console.log(students.sort(sortiranje));
