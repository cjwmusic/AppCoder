import React from "react"
import ReactDOM from "react-dom"

import Main from "./main/main.jsx"

class App extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return <Main />
    }
}

ReactDOM.render(<App/>,document.getElementById("root"))
