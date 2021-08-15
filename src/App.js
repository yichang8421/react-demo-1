import React, {useEffect} from 'react'
import ReactDOM from "react-dom";

let _state = [];
let index = 0;
const myUseState = (initialValue) => {
    const currentIndex = index;

    _state[currentIndex] = _state[currentIndex] === undefined ? initialValue : _state[currentIndex];

    const setState = (newValue) => {
        _state[currentIndex] = newValue;

        index = 0;
        ReactDOM.render(
            <App/>,
            document.getElementById('root')
        );
    };

    index += 1;
    return [_state[currentIndex], setState];
};

const App = () => {
    const [n, setN] = myUseState(0);
    const [m, setM] = myUseState(0);

    const useUpdate = (fn, n) => {
        const [nUpdateCount, setNUpdateCount] = myUseState(0);

        useEffect(() => {
            setNUpdateCount(nUpdateCount + 1);
            // eslint-disable-next-line react-hooks/exhaustive-deps
        }, [n]);

        useEffect(() => {
            if (nUpdateCount > 1) {
                fn();
            }
            // eslint-disable-next-line react-hooks/exhaustive-deps
        }, [nUpdateCount]);
    }

    useUpdate(() => {
        console.log('updeted');
    }, n);

    return (
        <div className="root">
            n: {n}
            <hr/>
            <button onClick={() => {
                setN(n + 1);
            }}>+1
            </button>
            <hr/>
            m: {m}
            <hr/>
            <button onClick={() => {
                setM(m + 1);
            }}>+1
            </button>
        </div>
    );
}


export default App;