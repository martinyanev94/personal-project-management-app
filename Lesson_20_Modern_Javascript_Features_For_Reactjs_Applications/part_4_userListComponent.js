const users = ['Alice', 'Bob', 'Charlie'];

const UserList = () => {
    return (
        <ul>
            {users.map(user => (
                <li key={user}>{user}</li>
            ))}
        </ul>
    );
};
