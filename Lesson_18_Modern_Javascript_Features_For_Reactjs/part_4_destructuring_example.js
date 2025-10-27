const person = { name: "Alice", age: 25 };
const { name, age } = person; // Destructured from object
console.log(name, age); // Outputs: Alice 25

const colors = ["red", "blue", "green"];
const [firstColor, secondColor] = colors; // Destructured from array
console.log(firstColor, secondColor); // Outputs: red blue
