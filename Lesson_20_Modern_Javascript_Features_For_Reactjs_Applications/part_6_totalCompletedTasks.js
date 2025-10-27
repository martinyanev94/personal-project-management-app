const completedCount = tasks.reduce((count, task) => {
    return task.completed ? count + 1 : count;
}, 0);

const TotalCompletedTasks = () => {
    return <h2>Total Completed Tasks: {completedCount}</h2>;
};
