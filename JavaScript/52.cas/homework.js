// Domaci:
// 1.
// Don't give me five!
// In this kata you get the start number and the end number of a region and should return the count of all numbers except numbers with a 5 in it. The start and the end number are both inclusive!

// Examples:

// 1,9 -> 1,2,3,4,6,7,8,9 -> Result 8
// 4,17 -> 4,6,7,8,9,10,11,12,13,14,16,17 -> Result 12

// 2.
// Write a function that can return the smallest value of an array or the index of that value. The function's 2nd parameter will tell whether it should return the value or the index.

// Assume the first parameter will always be an array filled with at least 1 number and no duplicates. Assume the second parameter will be a string holding one of two values: 'value' and 'index'.

// min([1,2,3,4,5], 'value') // => 1
// min([1,2,3,4,5], 'index') // => 0

// I

function notFive(start, end) {
  let count = 0;
  for (let i = start; i <= end; i++) {
    if (i.toString().includes("5")) {
      continue;
    }
    count++;
  }
  return count;
}
console.log(notFive(8, 10));

// II

// function min(arr, returnType) {
//   let minIndex = 0;
//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i] < arr[minIndex]) {
//       minIndex = i;
//     }
//   }
//   if (returnType === 'value') {
//     return arr[minIndex];
//   } else if (returnType === 'index') {
//     return minIndex;
//   }
// }

// console.log(min([2,4,5,6],'index'))