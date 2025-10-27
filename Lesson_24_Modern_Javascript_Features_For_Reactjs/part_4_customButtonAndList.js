const defaultProps = { color: 'blue', size: 'medium' };

const CustomButton = (props) => {
    const { color, size } = { ...defaultProps, ...props };
    return (
        <button style={{ color, fontSize: size }}>
            Click me!
        </button>
    );
};
const List = ({ items, ...rest }) => {
    return (
        <ul {...rest}>
            {items.map((item, index) => (
                <li key={index}>{item}</li>
            ))}
        </ul>
    );
};
