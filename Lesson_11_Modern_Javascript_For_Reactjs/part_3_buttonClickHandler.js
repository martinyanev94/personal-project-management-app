// With traditional function
class Button extends React.Component {
    handleClick() {
        console.log(this); // Will not refer to the Button component
    }

    render() {
        return <button onClick={this.handleClick}>Click Me!</button>;
    }
}

// Fixing it with an arrow function
const ButtonArrow = () => {
    const handleClick = () => {
        console.log(this); // Correctly refers to the ButtonArrow component
    };

    return <button onClick={handleClick}>Click Me!</button>;
};
