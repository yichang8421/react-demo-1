import React, {useReducer} from 'react'

const initial = {
    n: 0
};

const reducer = (state, action) => {
    if (action.type === 'add') {
        return {n: state.n + action.number};
    } else if (action.type === 'multi') {
        return {n: state.n * action.number};
    }
};

const App = () => {
    const [state, dispatch] = useReducer(reducer, initial);
    const {n} = state;

    return (
        <div>
            n: {n}
            <br/>
            <button onClick={() => {
                dispatch({
                    type: "add",
                    number: 2
                });
            }}>+2
            </button>
            <br/>
            <button onClick={() => {
                dispatch({
                    type: "multi",
                    number: 2
                });
            }}>x2
            </button>
        </div>
    );
};


export default App;