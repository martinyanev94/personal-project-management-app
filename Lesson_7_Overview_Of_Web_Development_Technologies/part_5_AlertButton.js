import React from 'react';

function AlertButton() {
    const handleClick = () => {
        alert("Hello! You clicked the button!");
    };

    return (
        <button onClick={handleClick}>Click Me!</button>
    );
}

export default AlertButton;
