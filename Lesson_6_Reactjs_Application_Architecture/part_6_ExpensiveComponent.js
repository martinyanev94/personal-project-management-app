import React, { useState, useMemo } from 'react';

const ExpensiveComponent = ({ a, b }) => {
    const computeExpensiveValue = (a, b) => {
        // Simulate expensive computation
        let result = 0;
        for (let i = 0; i < 1000000000; i++) {
            result += a + b;
        }
        return result;
    };

    const expensiveValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);

    return <h1>Computed Value: {expensiveValue}</h1>;
};
