// actions.js
const INCREMENT = 'INCREMENT';

export const increment = () => ({
    type: INCREMENT
});

// reducers.js
const initialState = { count: 0 };

const counterReducer = (state = initialState, action) => {
    switch (action.type) {
        case INCREMENT:
            return { ...state, count: state.count + 1 };
        default:
            return state;
    }
};

export default counterReducer;
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom';
import counterReducer from './reducers';
import App from './App';

const store = createStore(counterReducer);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
import React from 'react';
import { connect } from 'react-redux';
import { increment } from './actions';

const Counter = ({ count, increment }) => {
    return (
        <div>
            <h1>You clicked {count} times</h1>
            <button onClick={increment}>Click me</button>
        </div>
    );
};

const mapStateToProps = (state) => ({
    count: state.count
});

export default connect(mapStateToProps, { increment })(Counter);
