import React, {useContext} from "react";
import { useSettings } from "../context/useSettings";
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import Select from 'react-select';
import Button from "../Button";
import { CluesContext } from "../Main";
import axios from "axios";

/*
   SUGGESTIE FORMULIER
   -------------------
   Maak hier een formulier om een suggestie te verrichten.
*/

export const MakeSuggestionForm = ({ gameKey, selectedRoom }) => {
  const { settings } = useSettings();
  const clues  = useContext(CluesContext)
  
  const filteredClues = (filterWord) => {
    return clues.filter(clue => clue.type == filterWord)
  }

  const makeSuggestion = () => {

    console.log(gameKey)
    console.log(selectedRoom)
    

    // bodyFormData = {
    //   "room" : " " ,
    //   "weapon" : " " , 
    //   " suspect": " "


    // }


    // axios({
    //   method: "post",
    //   url: "https://htf-2021.calibrate.be/api/cluedo/guess",
    //   data: bodyFormData,
    // })
    //   .then(function (response) {
    //     //handle success
    //     console.log(response);
    //   })
    //   .catch(function (response) {
    //     //handle error
    //     console.log(response);
    //   });

    // axios.post("https://htf-2021.calibrate.be/api/cluedo/new-game" , {
    //   auth: {
    //     username: "mortarcycle",
    //     password: "hackthefuture"
    //   }
    // }).then((res)=>{

    //   console.log(res.data.key)
    
    //   onStart(res.data.key)

    // }).catch(err => {
    //   console.log(err)
    // }); 



  }

  return (
    <div>
      <h2>Maak een suggestie</h2>
    <h4>Weapon: </h4>
    <select>
        {filteredClues("weapon").map(clue =>
           <option key={clue.id} value={clue.title}>{clue.title}</option>
        )};
    </select>

    <h4>Suspect: </h4>
    <select>
        {filteredClues("suspect").map(clue =>
           <option key={clue.id} value={clue.title}>{clue.title}</option>
        )};
    </select>

     <Button onClick={makeSuggestion} value="Submit to the overlord"/>     

    </div>
  );
};
