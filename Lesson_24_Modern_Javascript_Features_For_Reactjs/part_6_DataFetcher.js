import React, { Component } from 'react';

class DataFetcher extends Component {
    state = {
        data: null,
        loading: true,
    };

    async componentDidMount() {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await response.json();
        this.setState({ data, loading: false });
    }

    render() {
        const { data, loading } = this.state;
        if (loading) return <div>Loading...</div>;
        return (
            <ul>
                {data.map(post => (
                    <li key={post.id}>{post.title}</li>
                ))}
            </ul>
        );
    }
}

export default DataFetcher;
