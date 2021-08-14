import React from 'react'

class App extends React.PureComponent {
    constructor() {
        super();
        this.state = {
            n: 0,
            arr: ['a', 'b', 'c']
        };
    }

    render() {
        return this.state.arr.map(i => <div key={i}>{i}</div>);
    }
}


export default App;