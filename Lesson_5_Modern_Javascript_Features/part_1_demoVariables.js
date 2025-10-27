function demoVariables() {
    let count = 0; // Block-scoped variable
    const maxCount = 10; // Constant

    for (let i = 0; i < maxCount; i++) {
        count++;
        console.log(`Count is now: ${count}`);
    }

    // Trying to reassign a constant will throw an error
    // maxCount = 20; // Uncaught TypeError: Assignment to constant variable.
}

demoVariables();
