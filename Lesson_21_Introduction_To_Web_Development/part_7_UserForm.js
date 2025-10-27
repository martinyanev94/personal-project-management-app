import React, { useState } from 'react';

function UserForm() {
    const [name, setName] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(`User Name: ${name}`);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" onChange={e => setName(e.target.value)} />
            <button type="submit">Submit</button>
        </form>
    );
}
