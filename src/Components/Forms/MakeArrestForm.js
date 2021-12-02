import React, {useContext, useState} from "react";
import { useSettings } from "../context/useSettings";
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import Select from 'react-select';
import Button from "../Button";
import { CluesContext } from "../Main";
import axios from "axios";



/*
   HET ARRESTATIE FORMULIER
   ------------------------
   Maak hier een formulier om een arrestatie te verrichten.
*/

export const MakeArrestForm = ({ gameKey, onArrest }) => {
  const { settings } = useSettings();
  const clues  = useContext(CluesContext);

  const [weapon, setWeapon] = useState(0);
  const [room, setRoom] = useState(0);
  const [suspect, setSuspect] = useState(0);
  const [showGuess, isShowGuess] = useState(false);
  const [guessResult, setGuessResult] = useState(0);

  const filteredClues = (filterWord) => {
    return clues.filter(clue => clue.type == filterWord)
  }


  const makeArrest = () => {

    isShowGuess(true); 

    const bodyFormData = {
      "room" : room,
      "weapon" : weapon , 
      "suspect" : suspect
    }

    console.log("suspect: ");
    console.log(suspect)

    axios({
      method: "post",
      url: "https://htf-2021.calibrate.be/api/cluedo/accuse?key=" + gameKey,
      data: bodyFormData,
      auth: {
        username: "mortarcycle",
        password: "hackthefuture"
      }
    })
      .then(function (response) {
        //handle success
        console.log(response);
        setGuessResult(response.data)


      })
      .catch(function (response) {
        //handle error
        console.log(response);
      });

  }


  return (
    <div>
      {console.log(gameKey)}
      <h2>Maak een arrestatie</h2>

    <h4>Weapon: </h4>
    <select onChange={(e) => setWeapon(e.target.value)}>
        {filteredClues("weapon").map(clue =>
           <option key={clue.id} value={clue.id}>{clue.title}</option>
        )};
    </select>

    <h4>Room: </h4>
    <select onChange={(e) => setRoom(e.target.value)}>
        {filteredClues("room").map(clue =>
           <option key={clue.id} value={clue.id}>{clue.title}</option>
        )};
    </select>


    <h4>Suspect: </h4>
    <select onChange={(e) => setSuspect(e.target.value)} >
        {filteredClues("suspect").map(clue =>
           <option key={clue.id} value={clue.id}>{clue.title}</option>
        )};
    </select>

    {
      !showGuess &&
     <Button onClick={makeArrest} value="Submit to the overlord"/>     
    }

      { showGuess &&
      
        <div>
          <p>Result: {guessResult.message} </p>
          <p>Oplossing: {guessResult.solution.room}</p>
          <ul>
          <li>
              Room: {guessResult.solution.room}
            </li> <li>
              Suspect: {guessResult.solution.suspect}
            </li> <li>
              Weapon: {guessResult.solution.weapon}
            </li>
            
          </ul>
        </div>
      }
      </div>
  );
};
