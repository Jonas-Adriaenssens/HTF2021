import React, { useContext, Component } from "react";
import { CluesContext } from "../Main";

export class SuspectItem extends Component {
  
  
    
    getStyle = () => {
    return {
      background: "#f4f4f4",
      borderBottom: "1px #ccc dotted"
      
     

    };
  };
  

  render() {



    if (this.props.clue.type == "suspect"){

    return (
      <div style={this.getStyle()}>
        <h4>Suspect</h4> 
        <p>ID: {this.props.clue.id}</p>
        <img src={"https://htf-2021.calibrate.be" + this.props.clue.image} />
      </div>
    );

  }
    else return <div></div>
  }
}

const btnStyle = {
  background: "#ff0000",
  color: "#fff",
  border: "none",
  padding: "5px 9px",
  borderRadius: "50%",
  cursor: "pointer",
  float: "right",
};

export default SuspectItem;
