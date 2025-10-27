class ShoppingList extends React.Component {
    state = {
        items: ['Apples', 'Bananas'],
    };

    addItem = (item) => {
        this.setState(prevState => ({
            items: [...prevState.items, item]
        }));
    };

    render() {
        return (
            <div>
                <h2>Shopping List</h2>
                <ul>
                    {this.state.items.map((item, index) => <li key={index}>{item}</li>)}
                </ul>
                <button onClick={() => this.addItem('Oranges')}>Add Oranges</button>
            </div>
        );
    }
}
