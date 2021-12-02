import React, {useContext} from "react";
import RoomItem from "../Clues/RoomItem";
import { CluesContext } from "../Main";

/*
   HET HUIS
   --------
   Bouw het huis en gebruik onSelectRoom bij klikken op een kamer.
*/

export const Mansion = ({ onSelectRoom }) => {


    const clues  = useContext(CluesContext)
 
  return (
    <div>
      <div>Bouw het huis en gebruik onSelectRoom bij klikken op een kamer.</div>

      
        {clues.map((clue) => (
         <div key={clue.id} onClick={() => onSelectRoom(clue.id)}>
          <RoomItem  key={clue.id} clue={clue}/>
         </div>
        )
        )}
  </div>
  );
};
