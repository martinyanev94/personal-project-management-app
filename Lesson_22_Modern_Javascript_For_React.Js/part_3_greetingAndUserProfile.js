const name = "Jane";
const greeting = `Hello, ${name}! Welcome to React.`;
console.log(greeting);
const UserProfile = ({ user }) => {
    return (
        <div>
            <h1>{`Username: ${user.username}`}</h1>
            <p>{`Email: ${user.email}`}</p>
        </div>
    );
};
