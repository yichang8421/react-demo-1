import React, {useState, useEffect} from 'react'

const App = () => {
    const [n, setN] = useState(0);

    useEffect(()=>{
        console.log('use effect');
    },[]);

    return (
        <div className="root">
            n: {n}
            <hr/>
            <button onClick={()=>{
                setN(n+1);
            }}>+1</button>
        </div>
    );
}


export default App;