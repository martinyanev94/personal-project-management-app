const add = (a, b) => a + b; // Implicit return, concise!
console.log(add(5, 3)); // Outputs: 8

const printNumbers = numbers => {
    numbers.forEach(num => console.log(num)); // Using lexically bound `this`
};
printNumbers([1, 2, 3]);
