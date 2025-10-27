array.reduce((accumulator, currentValue, currentIndex, array) => {
  // logic here
}, initialValue);
const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((acc, curr) => acc + curr, 0);
console.log(sum); // Output: 15
