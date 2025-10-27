import React from 'react';

class MyComponent extends React.Component {
    constructor() {
        super();
        this.state = {
            count: 0
        };
    }

    // Traditional function
    handleTraditionalClick() {
        this.setState({ count: this.state.count + 1 });
    }

    // Arrow function
    handleArrowClick = () => {
        this.setState({ count: this.state.count + 1 });
    }

    render() {
        return (
            <div>
                <h1>Count: {this.state.count}</h1>
                <button onClick={this.handleTraditionalClick.bind(this)}>Traditional Click</button>
                <button onClick={this.handleArrowClick}>Arrow Click</button>
            </div>
        );
    }
}

export default MyComponent;
