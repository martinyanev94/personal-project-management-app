const user = {
    name: 'John',
    age: 30,
    location: 'New York'
};

const UserProfile = (props) => {
    return (
        <div>
            <h2>{props.name}</h2>
            <p>Age: {props.age}</p>
            <p>Location: {props.location}</p>
        </div>
    );
};

const App = () => {
    return <UserProfile {...user} />;
};

export default App;
