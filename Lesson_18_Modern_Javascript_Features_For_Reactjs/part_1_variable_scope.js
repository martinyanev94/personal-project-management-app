{
    let greeting = "Hello World"; // This variable is block-scoped
    const pi = 3.14; // Constants cannot be reassigned
    console.log(greeting); // This works
}
console.log(greeting); // ReferenceError: greeting is not defined
console.log(pi); // ReferenceError: pi is not defined
const firstName = "Jane";
const lastName = "Doe";
const fullGreeting = `Hello, my name is ${firstName} ${lastName}`;
console.log(fullGreeting); // Hello, my name is Jane Doe
