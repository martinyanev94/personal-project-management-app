class MyComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = { name: "John" };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        alert(`Hello, ${this.state.name}`);
    }
  
    render() {
        return <button onClick={this.handleClick}>Greet</button>;
    }
}
class MyComponent extends React.Component {
    state = { name: "John" };

    handleClick = () => {
        alert(`Hello, ${this.state.name}`);
    };
  
    render() {
        return <button onClick={this.handleClick}>Greet</button>;
    }
}
