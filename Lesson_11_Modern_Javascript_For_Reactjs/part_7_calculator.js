// utilities.js
export const add = (x, y) => x + y;
export const subtract = (x, y) => x - y;

// App.js
import React from 'react';
import { add, subtract } from './utilities';

const Calculator = () => {
    return (
        <div>
            <h1>Addition: {add(5, 3)}</h1>
            <h1>Subtraction: {subtract(5, 3)}</h1>
        </div>
    );
};

export default Calculator;
