// Greeting.js
export const Greeting = ({ name }) => <h1>Hello, {name}</h1>;

// App.js
import { Greeting } from './Greeting';

const App = () => {
    return (
        <div>
            <Greeting name="Alice" />
        </div>
    );
};
