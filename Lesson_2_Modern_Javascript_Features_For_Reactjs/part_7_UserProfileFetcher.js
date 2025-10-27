class UserProfile extends React.Component {
    state = { user: null };

    componentDidMount = async () => {
        try {
            const response = await fetch('https://api.example.com/user');
            const data = await response.json();
            this.setState({ user: data });
        } catch (error) {
            console.error('Error fetching user:', error);
        }
    };

    render() {
        const { user } = this.state;
        if (!user) return <div>Loading...</div>;
        return <h1>{user.name}</h1>;
    }
}
