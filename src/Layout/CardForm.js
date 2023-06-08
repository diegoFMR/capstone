import React,{useEffect, useState } from "react";
import {useParams} from 'react-router-dom'
// import AddBtn from "./AddBtn";
import {readDeck} from "../utils/api";
// import Decks from "./Decks.js";

function CardForm() {
    const [deck, setDeck] = useState();
    const { deckId} = useParams();
    //Callback for useEffect
    
    //[] parameter is for componentDidMount
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
        <h2>{deck? deck.name:""}</h2>
        <form>
            <label>Front</label>
            <textarea value={deck? deck.name:""} onChange={()=>{}} />
            <label>Back</label>
            <textarea value={deck?deck.description:""}  onChange={()=>{}}></textarea>
            <button>Add Card</button>

        </form>
        
      </div>
  );
}

export default CardForm;
