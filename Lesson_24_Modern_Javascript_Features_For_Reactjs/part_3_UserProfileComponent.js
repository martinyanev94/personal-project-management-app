import React from 'react';

const UserProfile = ({ name, age }) => {
    return (
        <div>
            <h2>{`Name: ${name}`}</h2>
            <p>{`Age: ${age}`}</p>
        </div>
    );
};

export default UserProfile;
class User extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'John',
            age: 30
        };
    }

    render() {
        const { name, age } = this.state;
        return (
            <div>
                <h2>{`User: ${name}`}</h2>
                <p>{`Age: ${age}`}</p>
            </div>
        );
    }
}
