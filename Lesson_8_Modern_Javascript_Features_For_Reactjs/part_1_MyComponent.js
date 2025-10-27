class MyComponent extends React.Component {
    handleClick = () => {
        console.log('Button clicked! This refers to the component instance.');
    }

    render() {
        return <button onClick={this.handleClick}>Click Me!</button>;
    }
}
