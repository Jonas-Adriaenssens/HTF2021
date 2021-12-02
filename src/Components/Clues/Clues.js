import React, {useContext} from "react";
import { CluesContext } from "../Main";



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
    
    <div>{clues.map(clue => clue.id)}</div>
  
    </div>
  );
};

export default Clues;
