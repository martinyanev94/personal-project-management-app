const users = [
    { id: 1, name: 'Alice', active: true },
    { id: 2, name: 'Bob', active: false },
    { id: 3, name: 'Charlie', active: true },
];

const activeUserNames = users
    .filter(user => user.active)
    .map(user => user.name);

console.log(activeUserNames); // Output: ['Alice', 'Charlie']
