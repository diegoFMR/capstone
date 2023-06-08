import React,{useEffect, useState} from "react";
import AddBtn from "./AddBtn";
import {listDecks} from "../utils/api";
import Decks from "./Decks.js";

function Home() {
    const [decks, setDecks] = useState([]);

    //Callback for useEffect
    
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
        <Decks decks={decks}/>
      </div>
  );
}

export default Home;
