import React,{useEffect, useState } from "react";
import {useParams} from 'react-router-dom'
// import AddBtn from "./AddBtn";
import {readDeck} from "../utils/api";
// import Decks from "./Decks.js";

function DeckForm() {
    const [deck, setDeck] = useState();
    const { deckId} = useParams();
    //Callback for useEffect
    useEffect( ()=>{
        async function getDecks(){
            if(deckId){
                const response = await readDeck(deckId);
                setDeck(response);
            }
        }

        getDecks();
    }, []);

  return (
      <div className="">
        <h2>Create Deck</h2>
        <form>
            <label>Name</label>
            <input type="text" value={deck? deck.name:""} onChange={()=>{}} />
            <label>Description</label>
            <textarea value={deck?deck.description:""}  onChange={()=>{}}></textarea>
            <button>Submit</button>
            <button>Cancel</button>
        </form>
        
      </div>
  );
}

export default DeckForm;
