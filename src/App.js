import React, {useState, useEffect} from 'react'

const App = () => {
    let [ChildVisable, setChildVisable] = useState(true);
    return (
        <div className="root">
            {ChildVisable ?
                <button onClick={() => {
                    setChildVisable(false);
                }}>hide</button> :
                <button onClick={() => {
                    setChildVisable(true);
                }}>show</button>}
            {ChildVisable ? <Child/> : null}
        </div>
    );
};

const Child = () => {
    useEffect(() => {
        console.log("Child渲染了(componentDidMount)");
        return () => {
            console.log("Child被销毁了(componentWillUnmount)");
        }
    },[])

    return (
        <div>Child</div>
    );
};


export default App;