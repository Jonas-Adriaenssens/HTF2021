import React, {useContext} from "react";
import { CluesContext } from "../Main";
import { RoomItem } from "./RoomItem";



/*
   AANWIJZINGEN
   ------------
   Lijst hier de kamers, wapens en verdachten op.
*/



const Clues = () => {



  const clues  = useContext(CluesContext)


  return (
    <div className="full file">
      <h2>Aanwijzingen</h2>
      <div>Lijst hier de kamers, wapens en verdachten op.</div>

      <div>
        <h3>Weapons</h3>
      </div>

      <div>
        <h3>Suspect</h3>
      </div>

      <div>
        <h3>Room</h3>
       
        {clues.map((clue) => (
            <RoomItem  key={clue.id} clue={clue}/>
          )

       )}
        

      
      </div>

      {/* <div>{clues.map(clue => clue.id)}</div> */}
  
    </div>
  );
};

export default Clues;
