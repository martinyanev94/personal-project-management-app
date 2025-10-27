const MyComponent = () => {
    const greeting = "Hello, World!";
    return <h1>{greeting}</h1>;
};
const Counter = () => {
    let count = 0;
    
    const incrementCount = () => {
        count += 1;
        console.log(count);
    };

    return <button onClick={incrementCount}>Increment</button>;
};
