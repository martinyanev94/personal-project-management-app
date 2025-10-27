const UserGreeting = ({ user }) => {
    return (
        <h2>
            {`Hello, ${user.name}! Welcome to your dashboard.`}
        </h2>
    );
};
