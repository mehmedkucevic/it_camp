// Write a JavaScript program to check whether two numbers are in range 40..60 or in the range 70..100 inclusive.

function isInRange(num1, num2) {
  return (
    (num1 >= 40 && num1 <= 60 && num2 >= 40 && num2 <= 60) ||
    (num1 >= 70 && num1 <= 100 && num2 >= 70 && num2 <= 100)
  );
}
console.log(isInRange(41,50))// true
console.log(isInRange(41,80))// false
console.log(isInRange(80,90))// true
console.log(isInRange(50,100))//false





// Write a JavaScript program to find the larger number from the two givenpositive integers, the two numbers are in the range 40..60 inclusive.


function findLargerNumber(num1, num2) {
    if (num1 >= 40 && num1 <= 60 && num2 >= 40 && num2 <= 60) {
      return Math.max(num1, num2);
    }
    return 'Invalid input';
  }

  console.log(findLargerNumber(45, 59)); // 59
console.log(findLargerNumber(45, 70)); // 'Invalid input'
console.log(findLargerNumber(40, 42)); // 42