import React, {useContext} from "react";
import { useSettings } from "../context/useSettings";
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import Select from 'react-select';
import { CluesContext } from "../Main";

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

          
    
    </div>
  );
};
