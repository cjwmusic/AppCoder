import React from "react"
import ReactDOM from "react-dom"

import HeaderSection from "./component/base/headerSection.jsx"
import FooterSection from "./component/base/footerSection.jsx"

class App extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return <div id="app" >
            <HeaderSection title = 'iOS Code Generator V0.1'/>
            <FooterSection title = 'wukong@kongge.com'/>
        </div>
    }
}

ReactDOM.render(<App/>,document.getElementById("root"))
