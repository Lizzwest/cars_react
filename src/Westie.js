import React, {Component} from "react";
import clubJoker from "./clubjoker.jpg"

class Westie extends Component {
    render(){
        return(
            <div>
                <h1>Westfalia</h1>
                <img src={clubJoker} alt="Club Joker Photo" />
                <p>Club Joker</p>
            </div>
        )
    }
}
export default Westie;