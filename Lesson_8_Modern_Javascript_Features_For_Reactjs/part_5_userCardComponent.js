const age = 25;
const name = 'John';

const user = { name, age };

function UserCard() {
    return (
        <div>
            <h1>{user.name}</h1>
            <p>Age: {user.age}</p>
        </div>
    );
}
