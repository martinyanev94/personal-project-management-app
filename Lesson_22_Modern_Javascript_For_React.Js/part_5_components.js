const MyComponent = (props) => {
    return <h1>{props.title}</h1>;
};
const MyComponent = ({ title }) => {
    return <h1>{title}</h1>;
};
const UserProfile = () => {
    const [user, setUser] = useState({ username: "Jane", email: "jane@example.com" });
    const { username, email } = user; // Destructuring

    return (
        <div>
            <h1>{username}</h1>
            <p>{email}</p>
        </div>
    );
};
