const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

// Merging arrays
const merged = [...arr1, ...arr2];
console.log(merged); // [1, 2, 3, 4, 5, 6]
const person = { name: 'John', age: 30 };
const clonedPerson = { ...person };

console.log(clonedPerson); // { name: 'John', age: 30 }
function sum(...numbers) {
    return numbers.reduce((acc, num) => acc + num, 0);
}

console.log(sum(1, 2, 3, 4)); // 10
