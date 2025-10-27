const numbers = [1, 2, 3];
const newNumbers = [...numbers, 4, 5, 6]; // Add to the existing array
console.log(newNumbers); // Outputs: [1, 2, 3, 4, 5, 6]

const obj1 = { a: 1, b: 2 };
const obj2 = { ...obj1, c: 3 }; // Merge objects
console.log(obj2); // Outputs: { a: 1, b: 2, c: 3 }
