const tasks = [
    { id: 1, task: 'Do laundry', completed: true },
    { id: 2, task: 'Pay bills', completed: false },
    { id: 3, task: 'Grocery shopping', completed: true },
];

const CompletedTasks = () => {
    const completedTasks = tasks.filter(task => task.completed);
    return (
        <ul>
            {completedTasks.map(task => (
                <li key={task.id}>{task.task}</li>
            ))}
        </ul>
    );
};
