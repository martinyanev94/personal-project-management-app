import React from 'react';

function App() {
    const handleClick = () => {
        alert("Button clicked!");
    };

    return (
        <div>
            <h1>Hello, React!</h1>
            <button onClick={handleClick}>Click Me!</button>
        </div>
    );
}

export default App;
