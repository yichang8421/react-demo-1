import React from 'react'

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            n: 0,
        };
    }

    render() {
        return (
            <div>

                <Receptor name={this.state.n}></Receptor>

                <br/>
                <button onClick={() => {
                    this.setState(state => {
                        return {n: state.n + 1}
                    });
                    this.setState(state => {
                        return {n: state.n + 1}
                    });
                }}>不带回调参数 +2
                </button>

                <br/>
                <br/>
                <button onClick={() => {
                    this.setState((state) => {
                        return {n: state.n + 1}
                    }, () => {
                        this.setState(state => {
                            return {n: state.n + 1}
                        })
                    });
                }}>带回调参数 +2
                </button>
            </div>
        );
    }
}

class Receptor extends React.Component {
    constructor(props) {
        super(props);
    }

    componentWillReceiveProps(newProps, nextContext) {
        console.log(`props: ${this.props.name}`);
        console.log("变成");
        console.log(`newProps: ${newProps.name}`);
    }

    render() {
        return (
            <div>n: {this.props.name}</div>
        );
    }
}

export default App;