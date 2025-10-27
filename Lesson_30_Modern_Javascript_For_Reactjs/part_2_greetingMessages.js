const name = 'John';
const message = 'Hello, ' + name + '! Welcome to our site.';
const name = 'John';
const message = `Hello, ${name}!
Welcome to our site.`;
const Greeting = ({ name }) => {
    return <h1>{`Hello, ${name}!`}</h1>;
};
