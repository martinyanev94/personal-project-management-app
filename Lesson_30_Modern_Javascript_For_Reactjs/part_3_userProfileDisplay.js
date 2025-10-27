const user = {
    firstName: 'Jane',
    lastName: 'Doe',
    age: 30
};

const { firstName, lastName } = user;
console.log(firstName, lastName); // Outputs: Jane Doe
const UserProfile = ({ firstName, lastName, age }) => {
    return <div>{`${firstName} ${lastName} is ${age} years old.`}</div>;
};
