// User.js
export const User = ({ name }) => <h1>{name}</h1>;

// App.js
import React from 'react';
import { User } from './User';

function App() {
    return (
        <div>
            <User name="Alice" />
        </div>
    );
}
