import logo from './logo.svg'
import './App.css'
import React, {Component} from 'react'

class App extends Component{
    constructor(){
        super()
        this.state = {
            data: [
                {
                    id: 1,
                    name: "Anant",
                    Roll: 99
                },

                {
                    id: 2,
                    name: "Parveen",
                    Roll: 98
                },

                {
                    id: 3,
                    name: 'Niku',
                    Roll: 97
                }
            ]
        }
    }

    render(){
        return(
            <div>
                <Header/>
                <table>
                    <tbody>
                        {this.state.data.map((dynamicComponent, i) => <TableRow key = {i}
                        data = {dynamicComponent}></TableRow>)}
                    </tbody>    
                </table>
            </div>
        );
    }
}
            
            
        


class Header extends Component{
            render(){
                return(
                    <div>
                        <h2>My Table</h2>
                    </div>
                )
            }
        }

class TableRow extends Component{
            render(){
                return(
                    <table>
                        <tr>
                            <td>{this.props.data.id}</td>
                            <td>{this.props.data.name}</td>
                            <td>{this.props.data.roll}</td>
                        </tr>
                    </table>
    
                );
            }
        }

export default App;