import React from 'react'

class App extends React.PureComponent {
    constructor() {
        super();
        this.state = {
            n:0
        };
    }

    render() {
        console.log('rendered');
        return (
            <div>
                n: {this.state.n}
                <br/>
                <button onClick={()=>{
                    this.setState((state)=>{
                        return {n: state.n + 1};
                    });
                    this.setState((state)=>{
                        return {n: state.n - 1};
                    });
                }}>+1</button>
            </div>
        );

    }
}


export default App;