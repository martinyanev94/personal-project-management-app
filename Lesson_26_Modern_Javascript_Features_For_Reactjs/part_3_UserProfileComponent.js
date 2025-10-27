const UserProfile = (props) => {
    const { userName, userAge } = props;
    return (
        <div>
            <h1>{userName}</h1>
            <p>Your age is {userAge} years.</p>
        </div>
    );
};
const UserProfile = ({ userName, userAge }) => {
    return (
        <div>
            <h1>{userName}</h1>
            <p>Your age is {userAge} years.</p>
        </div>
    );
};
