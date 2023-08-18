import React, {Component} from 'react'
import './App.css'
import About from './About'
import Contact from './Contact'
import Error from './Error'
import Menu from './Menu'
import Home from './Home'
import {Route, Switch} from 'react-router-dom'

let App = () => {
    return(
    <div className = "MyClass">
        <Menu/>
        <Switch>
            <Route path = "/" component = {Home} exact/>
            <Route path = "/about" component = {About}></Route>
            <Route path = "/contact" component = {Contact}></Route>
            <Route path = "/about" component = {About}></Route>
            <Route component = {Error}></Route>
        </Switch>
        </div>
        )
}

export default App;