import {Component} from "react";
import "./App.css";

class ClassComp extends Component{
    render(){
        return(
            <div className="class inline">
            <h1>This is created using Class Component</h1>
            <p className="external">This is done by external css</p>
            <p style={{color:"blue"}}>This is done by internal css</p>
            </div>
        );
    }
}

export default ClassComp;