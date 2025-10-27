const student = {
    name: 'Alice',
    age: 22,
    major: 'Computer Science'
};

const name = student.name;
const age = student.age;
const major = student.major;

console.log(name, age, major);
const student = {
    name: 'Alice',
    age: 22,
    major: 'Computer Science'
};

const { name, age, major } = student; // Destructuring
console.log(name, age, major);
const numbers = [1, 2, 3];
const [one, two, three] = numbers; // Destructuring
console.log(one, two, three);
