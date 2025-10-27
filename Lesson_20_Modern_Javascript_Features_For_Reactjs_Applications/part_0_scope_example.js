function exampleFunction() {
    var x = 10; // function scoped
    let y = 20; // block scoped
    const z = 30; // block scoped

    if (true) {
        var x = 50; // overwrites x
        let y = 60; // creates a new y in this block
        console.log(x); // Output: 50
        console.log(y); // Output: 60
    }

    console.log(x); // Output: 50, the global x changed
    console.log(y); // Output: 20, the block scoped y remains untouched
    console.log(z); // Output: 30, z remains constant
}
