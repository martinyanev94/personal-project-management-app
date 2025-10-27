function testScope() {
    var x = 10; // Function scoped
    let y = 20; // Block scoped
    const z = 30; // Block scoped

    if (true) {
        var x = 50; // x is overwritten
        let y = 60; // y is a different variable
        console.log(x); // Output: 50
        console.log(y); // Output: 60
    }

    console.log(x); // Output: 50
    console.log(y); // Output: 20
    console.log(z); // Output: 30
}
