class UserFetcher extends React.Component {
    state = {
        user: null,
        error: null
    }

    componentDidMount() {
        fetch('https://api.example.com/user')
            .then(response => response.json())
            .then(user => this.setState({ user }))
            .catch(error => this.setState({ error: "Failed to fetch user" }));
    }

    render() {
        const { user, error } = this.state;
        if (error) return <p>{error}</p>;
        return <div>{user ? user.name : "Loading..."}</div>;
    }
}
