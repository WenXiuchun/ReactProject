class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0,
            name: 'julie'
        };
        this.handleReset = this.handleReset.bind(this);
        this.handleMinusOne = this.handleMinusOne.bind(this);
        this.handleAddOne = this.handleAddOne.bind(this);
    }

    handleAddOne() {
        //
        this.setState((prevState)=>{
            return {
                counter: prevState.counter+1 //don't use this.state.counter, because this.state,counter may not be refreshed
            };
        });
        console.log(this.state.counter);
    }

    handleMinusOne() {
        this.setState((prevState)=>{
            return {
                counter: prevState.counter - 1
            };
        });
        console.log(this.state.counter);
    }

    handleReset() {
        this.setState(()=>{
            return {
                counter: 0
            };
        });
        console.log(this.state.counter);
    }

    render() {
        return (
            <div>
                {this.state.name}
                <h1>Count: {this.state.counter}</h1>
                <button onClick={this.handleAddOne}>+1</button>
                <button onClick={this.handleMinusOne}>-1</button>
                <button onClick={this.handleReset}>reset</button>
            </div>
        );
    }
}

//

ReactDOM.render(<Counter />, document.getElementById("app"));