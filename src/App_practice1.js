import logo from './logo.svg';
import './App.css';
import Welcome from './Welcome'
import React, { Component } from 'react'

class App extends Component{
  render(){
  return (
    <div>
      Whats going on?
      <h1>HELLO!</h1>
      <p> I am writing HTML inside reactjs!</p><Welcome/>
    </div>

  );
}
}

export default App