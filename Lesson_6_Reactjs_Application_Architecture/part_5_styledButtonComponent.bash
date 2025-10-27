npm install styled-components
import styled from 'styled-components';

const StyledButton = styled.button`
    background-color: blue;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 4px;
    cursor: pointer;

    &:hover {
        background-color: darkblue;
    }
`;

const App = () => {
    return <StyledButton>Click Me!</StyledButton>;
};

export default App;
