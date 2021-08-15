import React, {useRef, useState} from 'react'

const App = () => {
    const nRef = useRef(0);
    const updateN = useState(null)[1];

    return (
        <div className="root">
            n: {nRef.current}

            <hr/>
            <button onClick={() => {
                updateN(nRef.current++);
            }}>+1
            </button>

            <hr/>
            <button onClick={() => {
                setTimeout(() => {
                    console.log(nRef.current);
                }, 3000)
            }}>三秒后控制台打印 n
            </button>
        </div>
    );
}


export default App;