import React, { useState } from 'react';

const Counter = () => {
    let count = 0;

    const handleClick = () => {
        count++;
        alert(`Current count: ${count}`);
    };

    return (
        <div>
            <button onClick={handleClick}>Increase Count</button>
        </div>
    );
};

export default Counter;
