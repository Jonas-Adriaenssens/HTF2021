import React, {useContext} from "react";
import { CluesContext } from "../Main";
import { RoomItem } from "./RoomItem";
import SuspectItem from "./SuspectItem";
import WeaponItem from "./WeaponItem";



/*
   AANWIJZINGEN
   ------------
   Lijst hier de kamers, wapens en verdachten op.
*/


//TODO: ADD CHECK IF USECONTEXT IS LOADED
const Clues = () => {
  const clues  = useContext(CluesContext)

  return clues ? (

    <div className="full file">
      <h2>Aanwijzingen</h2>
      <div>Lijst hier de kamers, wapens en verdachten op.</div>

      <div>
        <h3>Weapons</h3>
        {clues.map((clue) => (
            <WeaponItem  key={clue.id} clue={clue}/>
          )
       )}
      </div>

      <div>
        <h3>Suspect</h3>
        {clues.map((clue) => (
            <SuspectItem  key={clue.id} clue={clue}/>
          )
       )}
      </div>

      <div>
        <h3>Room</h3>
       
        {clues.map((clue) => (
            <RoomItem  key={clue.id} clue={clue}/>
          )
       )}
      
      </div>

    </div>
  ) : null;
};

export default Clues;
