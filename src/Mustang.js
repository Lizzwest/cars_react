import React, {Component} from "react";
import mustang from "./mustang.jpg"

class Mustang extends Component {
    render(){
        return(
            <div>
                <h1>Mustang</h1>
                <img src={mustang} alt="mustang" />
                <p>Mustang</p>
            </div>
        )
    }
}
export default Mustang;