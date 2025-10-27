const newUser = { id: 4, name: 'David', age: 28 };
const updatedUsers = [...users, newUser]; // Using the spread operator

const UserList = () => {
    return (
        <ul>
            {updatedUsers.map(user => (
                <li key={user.id}>{user.name}</li>
            ))}
        </ul>
    );
};
