import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react'

class App extends Component{
    constructor(){
        super()
        this.state = {
            data: 0,
            message: "What a lovely day!"
        }
    }

    componentDidMount(){
        setTimeout(() =>{
            this.setState({message:"What a lovely night?"})},2000)
        }

    update(){
        this.setState({
            data: this.state.data + 1
        })}
    
    handy(){
        alert("You are alerted-my friend!")
    }

    render(){
        return(
            <div>
                {this.state.data}
                <button onClick ={()=> this.update()}>Click me!</button>
                <p>Enjoy pressing the buttons above and below</p>
                <button onMouseOver = {()=>this.handy()}>Alert me!</button>
                <h3>Check this out: {this.state.message}</h3>
            </div>
        )
    }
}

export default App;

