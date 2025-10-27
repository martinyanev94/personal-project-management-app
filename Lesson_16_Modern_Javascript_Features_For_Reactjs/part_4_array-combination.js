const array1 = [1, 2, 3];
const array2 = [4, 5, 6];

// Using the spread operator
const combinedArray = [...array1, ...array2];
console.log(combinedArray); // Output: [1, 2, 3, 4, 5, 6]
const initialState = [1, 2, 3];
const newState = [...initialState, 4]; // Adding 4
