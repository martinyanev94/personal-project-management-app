import React, { useEffect, useState } from 'react';

const UserListWithFetch = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchUsers = async () => {
            const response = await fetch('https://api.example.com/users');
            const data = await response.json();
            setUsers(data);
            setLoading(false);
        };
        fetchUsers();
    }, []);

    if (loading) return <p>Loading users...</p>;

    return (
        <ul>
            {users.map(user => (
                <li key={user.id}>{user.name}</li>
            ))}
        </ul>
    );
};

export default UserListWithFetch;
