const users = [
    { id: 1, name: 'Alice', age: 25 },
    { id: 2, name: 'Bob', age: 30 },
    { id: 3, name: 'Charlie', age: 35 },
];

const foundUser = users.find(user => user.age === 30);
console.log(foundUser); // Output: { id: 2, name: 'Bob', age: 30 }
