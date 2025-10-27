const user = {
    name: 'Jane',
    age: 30,
};

const { name, age } = user;
console.log(`${name} is ${age} years old.`);
const UserProfile = ({ name, age }) => {
    return <div>{name} is {age} years old.</div>;
};
