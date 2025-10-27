import React, { useEffect, useState } from 'react';

const UserData = () => {
    const [data, setData] = useState(null);

    const fetchData = async () => {
        try {
            const response = await fetch('https://api.example.com/user');
            const result = await response.json();
            setData(result);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div>
            {data ? (
                <h1>{data.name}</h1>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default UserData;
