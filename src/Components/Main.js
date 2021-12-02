import React, { useEffect, useState } from "react";
import Menu from "./Menu";
import Checklist from "./Checklist";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Intro from "./Intro";
import Cluedo from "./Cluedo/Cluedo";
import Clues from "./Clues/Clues";
import { useSettings } from "./context/useSettings";
import axios from "axios";

export const CluesContext = React.createContext();

export const Main = () => {
  const { settings, setSettings } = useSettings();
  const [clues, setClues] = useState();

  useEffect(() => {
    setSettings({
      baseURL: process.env.REACT_APP_BASE_URL,
      url: {
        new: process.env.REACT_APP_URL_NEW,
        clues: process.env.REACT_APP_URL_CLUES,
        suggest: process.env.REACT_APP_URL_SUGGEST,
        accuse: process.env.REACT_APP_URL_ACCUSE,
      },
      auth: {
        username: process.env.REACT_APP_USERNAME,
        password: process.env.REACT_APP_PASSWORD,
      },
      clueTypes: {
        suspect: process.env.REACT_APP_SUSPECT,
        weapon: process.env.REACT_APP_WEAPON,
        room: process.env.REACT_APP_ROOM,
      },
    });
  }, [setSettings]);

  useEffect(() => {
    if (settings) {
      console.log(settings)
      // De settings zijn geladen, haal hier de aanwijzingen op en bewaar ze in de state (setClues)
      console.log("userename : " + settings.auth.username)
      console.log("basurl : " + settings.baseURL)
      //TODO: fix => settings are undefined ? => get rid of hardcoded username and password

      axios.get("https://htf-2021.calibrate.be/api/cluedo/clues" , {
      auth: {
        username: "mortarcycle",
        password: "hackthefuture"
      }
    }).then((res)=>{

      const clues = res.data; 

      setClues(clues);

      console.log(res.data)

      console.log("clues: " + clues.map(clue => clue.id))

      // clues.forEach(clue => 
      //   setClues(
      //     {
      //       type: clue.type,
      //       id: clue.id,
      //       title: clue.title,
      //     }
      //   )
      //   )
      //   console.log(clue.type)
      // });

 
    }).catch(err => {
      console.log(err)
    }); 
    
    
    



    }
  }, [settings]);

  return (
    <Router>
      <div className="App">
        <h1>Hack The Future</h1>
        <div className={"panel-1"}>
          <Menu />
          <Checklist />
        </div>
        <div className={"panel-2"}>
          <CluesContext.Provider value={clues}>
            <Switch>
              <Route path={["/", "/intro"]} exact render={() => <Intro />} />
              <Route path="/cluedo" render={() => <Cluedo />} />
              <Route path="/clues" render={() => <Clues />} />
            </Switch>
          </CluesContext.Provider>
        </div>
      </div>
    </Router>
  );
};
