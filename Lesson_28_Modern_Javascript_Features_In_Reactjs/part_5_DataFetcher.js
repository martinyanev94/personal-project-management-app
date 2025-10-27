class DataFetcher extends React.Component {
    state = {
        data: null,
        loading: true
    }

    async componentDidMount() {
        try {
            const response = await fetch('https://api.example.com/data');
            const data = await response.json();
            this.setState({ data, loading: false });
        } catch (error) {
            console.error("Error fetching data:", error);
            this.setState({ loading: false });
        }
    }

    render() {
        const { loading, data } = this.state;
        if (loading) return <p>Loading...</p>;
        return <div>{JSON.stringify(data)}</div>;
    }
}
