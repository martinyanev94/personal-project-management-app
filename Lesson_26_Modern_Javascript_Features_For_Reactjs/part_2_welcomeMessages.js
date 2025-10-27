const name = "Alice";
const message = `Welcome, ${name}! It's a pleasure to have you here.`;
const UserProfile = ({ user }) => {
    const welcomeMessage = `Welcome back, ${user.firstName} ${user.lastName}!`;
    return <h2>{welcomeMessage}</h2>;
};
