import React, {useContext, useState} from "react";
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
  const clues  = useContext(CluesContext);

  const [weapon, setWeapon] = useState(0);
  const [suspect, setSuspect] = useState(0);

  const filteredClues = (filterWord) => {
    return clues.filter(clue => clue.type == filterWord)
  }

  const makeSuggestion = () => {


    const bodyFormData = {
      "room" : selectedRoom,
      "weapon" : weapon , 
      "suspect": suspect
    }

    console.log("suspect: ");
    console.log(suspect)

    axios({
      method: "post",
      url: "https://htf-2021.calibrate.be/api/cluedo/guess?key=" + gameKey,
      data: bodyFormData,
      auth: {
        username: "mortarcycle",
        password: "hackthefuture"
      }
    })
      .then(function (response) {
        //handle success
        console.log(response);
      })
      .catch(function (response) {
        //handle error
        console.log(response);
      });

  }


  return (
    <div>
      <h2>Maak een suggestie</h2>
    <h4>Weapon: </h4>
    <select onChange={(e) => setWeapon(e.target.value)}>
        {filteredClues("weapon").map(clue =>
           <option key={clue.id} value={clue.id}>{clue.title}</option>
        )};
    </select>

    <h4>Suspect: </h4>
    <select onChange={(e) => setSuspect(e.target.value)} >
        {filteredClues("suspect").map(clue =>
           <option key={clue.id} value={clue.id}>{clue.title}</option>
        )};
    </select>

     <Button onClick={makeSuggestion} value="Submit to the overlord"/>     

    </div>
  );
};
