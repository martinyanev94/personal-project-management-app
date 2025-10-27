const users = [
    { name: "John", age: 28 },
    { name: "Jane", age: 30 },
    { name: "Bob", age: 25 }
];

const userNames = users.map(user => user.name);
console.log(userNames); // ["John", "Jane", "Bob"]
