const arrayOne = [1, 2, 3];
const arrayTwo = [4, 5, 6];
const combined = [...arrayOne, ...arrayTwo];
console.log(combined); // Outputs: [1, 2, 3, 4, 5, 6]
const initialState = { name: 'John', age: 25 };
const newState = { ...initialState, age: 26 };
const sum = (...numbers) => {
    return numbers.reduce((total, num) => total + num, 0);
};

console.log(sum(1, 2, 3, 4)); // Outputs: 10
