const users = [
    { id: 1, name: 'Alice', email: 'alice@example.com' },
    { id: 2, name: 'Bob', email: 'bob@example.com' },
    { id: 3, name: 'Charlie', email: 'charlie@example.com' },
];

const userEmails = users.map(({ name, email }) => ({ name, email }));
console.log(userEmails);
// Output: [
//   { name: 'Alice', email: 'alice@example.com' },
//   { name: 'Bob', email: 'bob@example.com' },
//   { name: 'Charlie', email: 'charlie@example.com' },
// ]
