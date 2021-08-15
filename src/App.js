import React, {useState, useEffect} from 'react'

const App = () => {
    const [n, setN] = useState(0);

    const [nUpdateCount, setNUpdateCount] = useState(0);

    useEffect(() => {
        setNUpdateCount(nUpdateCount => nUpdateCount + 1);
    }, [n]);

    useEffect(() => {
        if (nUpdateCount > 1) {
            console.log('n updeated');
        }
    }, [nUpdateCount]);

    return (
        <div className="root">
            n: {n}
            <hr/>
            <button onClick={() => {
                setN(n + 1);
            }}>+1
            </button>
        </div>
    );
}


export default App;