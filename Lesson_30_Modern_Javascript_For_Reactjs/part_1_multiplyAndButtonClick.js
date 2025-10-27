function multiply(a, b) {
    return a * b;
}
const multiply = (a, b) => a * b;
const App = () => {
    const handleClick = () => {
        console.log('Button clicked!');
    };

    return <button onClick={handleClick}>Click Me!</button>;
};
