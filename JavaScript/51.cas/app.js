// First way
function max(arr) {
  for (i = 0; i < arr.length; i++) {
    for (k = i + 1; k < arr.length; k++) {
      if (arr[i] > arr[k]) {
        pom = arr[k];
        arr[k] = arr[i];
        arr[i] = pom;
      }
    }
  }
  console.log(arr);
}
max(["mesha", "a", "as", "asd"]);

// Second way

const sortArray = (sampleArray) => {
  sampleArray.sort((first, second) => {
    return first.length - second.length;
  });
};

const arr = ["Telescopes", "Glasses", "Eyes", "Monocles"];
sortArray(arr);
console.log(arr);




  




