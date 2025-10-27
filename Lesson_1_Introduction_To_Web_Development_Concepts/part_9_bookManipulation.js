const book = {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald"
};

const { title, author } = book;
console.log(title); // Outputs: The Great Gatsby
const originalArr = [1, 2, 3];
const newArr = [...originalArr, 4, 5];
console.log(newArr); // Outputs: [1, 2, 3, 4, 5]
