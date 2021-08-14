import React from 'react'

class App extends React.PureComponent {
    constructor() {
        super();
        this.state = {
            n: 0,
            width: undefined
        };
        this.myRef = React.createRef();
    }

    componentDidMount() {
        const div = this.myRef.current;
        const {width} = div.getBoundingClientRect();
        this.setState(()=>{
            return {width};
        })
    }

    render() {
        return (
            <div ref={this.myRef}>window width: {this.state.width}</div>
        );
    }
}


export default App;