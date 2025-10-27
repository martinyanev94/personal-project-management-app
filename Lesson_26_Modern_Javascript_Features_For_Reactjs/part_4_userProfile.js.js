const [user, setUser] = useState({ name: 'Alice', age: 25 });

const updateUserAge = (newAge) => {
    setUser(prevUser => ({
        ...prevUser,
        age: newAge
    }));
};
const UserProfile = ({ name, age, ...otherProps }) => {
    return (
        <div>
            <h1>{name}</h1>
            <p>Age: {age}</p>
            <OtherComponent {...otherProps} />
        </div>
    );
};
