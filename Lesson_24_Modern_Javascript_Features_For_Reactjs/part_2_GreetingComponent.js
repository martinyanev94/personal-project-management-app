import React from 'react';

class Greeting extends React.Component {
    render() {
        const name = "World";
        return (
            <h1>{`Hello, ${name}! Welcome to React.`}</h1>
        );
    }
}

export default Greeting;
