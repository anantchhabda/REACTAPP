import logo from './logo.svg';
import './App.css';
import React, {Component} from 'react';

class App extends Component{

    constructor(props){
        super(props);

        this.state = {data: ''};

        this.updateState = this.updateState.bind(this);
        this.clearInput = this.clearInput.bind(this);
    }

    updateState(e){
        this.setState({data: e.target.value});
    }

    clearInput(){
        this.setState({data: ''});
    }

    render(){
        return(
            <div>
                <input value = {this.state.data} onChange = {this.updateState}></input>
                <br></br>
                <button onClick = {this.clearInput}>CLEAR ME!</button>
                <h2>I think this is your data? {this.state.data}</h2>

            </div>

        )
    }
}

export default App;
