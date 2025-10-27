class Counter extends React.Component {
    state = { count: 0 };

    increment = () => {
        this.setState(({ count }) => ({ count: count + 1 }));
    };

    render() {
        return (
            <div>
                <h1>Count: {this.state.count}</h1>
                <button onClick={this.increment}>Increment</button>
            </div>
        );
    }
}
