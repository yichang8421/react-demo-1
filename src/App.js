import React from 'react'

class App extends React.PureComponent {
    constructor() {
        super();
        this.state = {
            n: 0,
            width: undefined
        };
    }

    componentDidMount() {
        const div = document.getElementById("divWidth");
        const {width} = div.getBoundingClientRect();
        this.setState(()=>{
            return {width};
        })
    }

    render() {
        return (
            <div id="divWidth">window width: {this.state.width}</div>
        );
    }
}


export default App;