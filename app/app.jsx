import React from "react"
import ReactDOM from "react-dom"
import Hello from "./component/hello.jsx"

class App extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return <div id="app">
            <Hello/>
        </div>
    }
}

ReactDOM.render(<App/>,document.getElementById("root"))
