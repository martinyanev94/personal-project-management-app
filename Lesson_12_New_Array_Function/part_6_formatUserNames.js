const formattedNames = users.map(user => {
    return `${user.name} - Age: ${user.age}`;
});

console.log(formattedNames); // Output: ['Alice - Age: 25', 'Bob - Age: 30', 'Charlie - Age: 35']
