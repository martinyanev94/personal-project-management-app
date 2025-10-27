const user = {
    name: 'Jane Doe',
    age: 28,
};

const UserInfo = ({ name, age }) => {
    return <p>{name} is {age} years old.</p>;
};

// Usage
<UserInfo {...user} />
