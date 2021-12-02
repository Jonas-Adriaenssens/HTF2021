import React, { useContext, Component } from "react";
import { CluesContext } from "../Main";

export class SuspectItem extends Component {
  
  
    
    getStyle = () => {
    return {
      background: "#f4f4f4",
      borderBottom: "1px #ccc dotted"
      
     

    };
  };
  
  
  componentDidMount = (props) => {
    console.log(this.props.title);
  };
  


  render() {



    if (this.props.clue.type == "suspect"){

    return (
      <div style={this.getStyle()}>
        <h4>Suspect</h4> 
        <p>ID: {this.props.clue.id}</p>
        <p>Title: {this.props.clue.title}</p>
        <p>Description: {this.props.clue.description}</p>
        <p>Color: {this.props.clue.color}</p>
        <img src={this.props.clue.image} />

      </div>
    );

  }
    else return <div></div>
  }
}

// // PropTypes
// TodoItem.propTypes = {
//   todo: PropTypes.object.isRequired,
//   markComplete: PropTypes.func.isRequired,
//   delTodo: PropTypes.func.isRequired,
// };

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
