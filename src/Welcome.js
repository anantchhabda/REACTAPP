import React, { Component } from 'react'
class Welcome extends Component {

    constructor(props)
    {
        super(props);
        this.state = {
            message: "Welcome to my initial days of learning react!",
            content: "This is amazing!"
        }
    }

render(){
return (
<div>
    <App a = {this.state.message}/>
    <h6>Welcome to this place my friend! </h6>
    <h3>{this.state.message}</h3>
    <h4>{this.state.content}</h4>
</div>
    )
}
}
export default Welcome