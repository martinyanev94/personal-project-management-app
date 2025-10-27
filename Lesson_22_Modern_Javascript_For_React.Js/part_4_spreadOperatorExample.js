const names = ["John", "Jane", "Doe"];
const newNames = [...names, "Smith"]; // Using the spread operator
const [user, setUser] = useState({ name: "John", age: 30 });

const updateUser = () => {
    setUser({ ...user, age: 31 }); // Update age without mutating the original user object
};
