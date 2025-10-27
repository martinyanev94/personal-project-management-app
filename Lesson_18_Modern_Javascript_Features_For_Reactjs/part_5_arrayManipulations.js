const numbers = [1, 2, 3, 4];
const doubled = numbers.map(num => num * 2);
console.log(doubled); // Outputs: [2, 4, 6, 8]
const ages = [12, 25, 5, 30];
const belowTwentyOne = ages.filter(age => age < 21);
console.log(belowTwentyOne); // Outputs: [12, 5]
const total = numbers.reduce((accumulator, current) => accumulator + current, 0);
console.log(total); // Outputs: 10 (the sum of 1+2+3+4)
