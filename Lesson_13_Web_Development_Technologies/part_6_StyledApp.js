import React from 'react';
import styles from './App.module.css';

function App() {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Welcome to My Styled App</h1>
            <button className={styles.button} onClick={() => alert('Styled Button Clicked!')}>Click Me</button>
        </div>
    );
}

export default App;
