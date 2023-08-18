import React, {useState} from 'react'

function App(){
    const [count, setMAN] = useState(0);


return(
    <div>
        <p>You have clicked {count} times so far my good Sir!</p>
        <button onClick = {() => setMAN(count+1)}>Click me!</button>
        <button onClick = {()=> setMAN(0)}>Reset Sir!</button>
    </div>
)
}

export default App;