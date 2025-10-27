const adultAges = users
    .filter(user => user.age > 30)
    .map(user => user.age);

console.log(adultAges); // Output: [35]
