const UserProfile = ({ user: { name, age, email } }) => {
    return (
        <div>
            <h1>Name: {name}</h1>
            <h2>Age: {age}</h2>
            <h3>Email: {email}</h3>
        </div>
    );
};
