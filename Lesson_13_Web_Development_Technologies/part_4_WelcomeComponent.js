import React from 'react';

function WelcomeComponent() {
    return (
        <div>
            <h1>Welcome to React!</h1>
            <button onClick={() => alert('Hello from React!')}>Click Me</button>
        </div>
    );
}

export default WelcomeComponent;
