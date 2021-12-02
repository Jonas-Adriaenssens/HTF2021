import React from "react";
import {useSettings} from "../context/useSettings";
import Button from "../Button";
import axios from "axios";

/*
   CLUEDO START
   ------------
   In dit component moet je een nieuw spel genereren via de api.
   Geef de nieuwe gameKey mee aan de onStart functie (zie props).
*/

const CluedoStart = ({ onStart }) => {
  const { settings } = useSettings();
  
  const startGame = () => {
    //TODO: use settings 
    axios.get("https://htf-2021.calibrate.be/api/cluedo/new-game" , {
      auth: {
        username: "mortarcycle",
        password: "hackthefuture"
      }
    }).then((res)=>{

      console.log(res.data.key)
    
      onStart(res.data.key)

    }).catch(err => {
      console.log(err)
    }); 


  };

  return (

    <div>
      <h3>Teeeeest</h3>
      <button>I WIN</button>

    <div className={"file full"}>
      <h2>Cluedo</h2>
      <Button onClick={startGame} value="Start een nieuw spel" />
    </div>
    </div>

  );
};

export default CluedoStart;
