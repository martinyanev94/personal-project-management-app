{
    let blockScoped = 'I am here!';
    const alsoBlockScoped = 'So am I!';
}

console.log(blockScoped); // ReferenceError
console.log(alsoBlockScoped); // ReferenceError
