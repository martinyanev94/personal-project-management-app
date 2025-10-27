class DataFetcher extends React.Component {
    state = { data: null };

    async componentDidMount() {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts');
            const data = await response.json();
            this.setState({ data });
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    render() {
        const { data } = this.state;

        if (!data) {
            return <p>Loading...</p>;
        }
        
        return (
            <div>
                <h2>Fetched Posts</h2>
                <ul>
                    {data.map(post => (
                        <li key={post.id}>{post.title}</li>
                    ))}
                </ul>
            </div>
        );
    }
}
