// components/User.js
export const User = ({ name }) => {
    return <h2>{name}</h2>;
};

// App.js
import { User } from './components/User';

const App = () => {
    return (
        <div>
            <User name="John Doe" />
        </div>
    );
};
