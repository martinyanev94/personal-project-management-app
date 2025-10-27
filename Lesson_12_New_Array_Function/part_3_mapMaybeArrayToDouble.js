const maybeArray = null;

const result = Array.isArray(maybeArray) ? maybeArray.map(item => item * 2) : [];
console.log(result); // Output: []
