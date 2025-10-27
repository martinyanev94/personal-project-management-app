const users = [
    { id: 1, name: 'Alice', age: 25 },
    { id: 2, name: 'Bob', age: 30 },
    { id: 3, name: 'Charlie', age: 35 },
];
const userNames = users.map(user => user.name);
console.log(userNames); // Output: ['Alice', 'Bob', 'Charlie']
