import React from 'react';

const Header = () => {
    return <h1>Welcome to My App</h1>;
};

export default Header;
import React from 'react';
import Header from './Header';

const App = () => {
    return (
        <div>
            <Header />
            <p>This is the main application content.</p>
        </div>
    );
};

export default App;
