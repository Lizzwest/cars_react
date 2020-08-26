import React, {Component} from "react";
import buggy from "./buggy.jpg"

class Bug extends Component {
    render(){
        return(
            <div>
                <h1>Buggy</h1>
                <img src={buggy} alt="Buggy" />
                <p>VW Bug</p>
            </div>
        )
    }
}
export default Bug;