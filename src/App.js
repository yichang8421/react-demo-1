import React from 'react'

class App extends React.PureComponent {
    constructor() {
        super();
        this.state = {
            n:0
        };
    }

    render() {
        return (
            <>
                {(this.state.n%2) ? <div>奇数</div> : <div>偶数</div>}
                <br/>
                <button onClick={()=>{
                    this.setState((state)=>{
                        return {n: state.n +1};
                    })
                }}>+1</button>
            </>
        );
    }
}


export default App;