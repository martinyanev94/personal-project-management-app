const ParentComponent = (props) => {
    return <ChildComponent {...props} />;
}
const sum = (...numbers) => {
    return numbers.reduce((acc, num) => acc + num, 0);
}
