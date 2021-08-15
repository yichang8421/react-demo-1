import React, {useState} from 'react'
import useUpdate from "./useUpdate";

const App = () => {
    const [n, setN] = useState(0);

    useUpdate(()=>{
        console.log("updated");
    },n);

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