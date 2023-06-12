import React,{useEffect, useState} from "react";
import AddBtn from "./AddBtn";
import {listDecks} from "../utils/api";
import Decks from "./Decks.js";

function Home() {
    const [decks, setDecks] = useState([]);

    //Callback for useEffect
    async function getDecks(){    
      const response = await listDecks();
      setDecks(response);
    }
    
    //[] parameter is for componentDidMount
    useEffect( ()=>{
      async function getDecks(){    
        const response = await listDecks();
        setDecks(response);
      }

      getDecks();
    }, []);

  return (
      <div className="">
        <AddBtn />
        <Decks decks={decks} getDecks={getDecks} />
      </div>
  );
}

export default Home;
