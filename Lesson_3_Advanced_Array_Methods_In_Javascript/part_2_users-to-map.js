const users = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
    { id: 3, name: 'Charlie' },
];

const usersMap = users.reduce((acc, user) => {
    acc[user.id] = user.name;
    return acc;
}, {});

console.log(usersMap); // Output: { 1: 'Alice', 2: 'Bob', 3: 'Charlie' }
