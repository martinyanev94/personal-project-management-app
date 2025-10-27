const numbers = [1, 2, 3];
const moreNumbers = [4, 5, ...numbers];
console.log(moreNumbers); // Output: [4, 5, 1, 2, 3]

const addAll = (...args) => args.reduce((acc, curr) => acc + curr, 0);
console.log(addAll(10, 20, 30)); // Output: 60
