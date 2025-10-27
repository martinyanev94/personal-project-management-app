class TodoList extends React.Component {
    state = { todos: [] };

    addTodo = (newTodo) => {
        this.setState((prevState) => ({
            todos: [...prevState.todos, newTodo],
        }));
    };

    render() {
        return (
            <ul>
                {this.state.todos.map((todo, index) => (
                    <li key={index}>{todo}</li>
                ))}
            </ul>
        );
    }
}
