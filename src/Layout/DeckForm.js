import React,{useEffect, useState } from "react";
import {useParams} from 'react-router-dom'
// import AddBtn from "./AddBtn";
import {readDeck, updateDeck, createDeck} from "../utils/api";

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

    const onSubmit = async (e)=>{
        e.preventDefault();
        let valid;

        try{

        }catch(e){

        }

        try{
            if(deck.name && deck.description && !deckId){
                const response = await createDeck(deck);
                if(response)alert("Deck added sucessfully");
                console.log(response);
            }else if(deck.name && deck.description && deckId){
                const response = await updateDeck(deck);
                if(response)alert("Deck updated sucessfully");
            }else{
                alert("Please enter all the values");
                console.log(`deckId: ${deckId} evaluation: ${Number.isInteger(deckId)}`)
            }
        }catch(e){
            console.log(e);
        }
    }

  return (
      <div className="">
        <h2>Create Deck</h2>
        <form onSubmit={onSubmit}>
            <label>Name</label>
            <input type="text" value={deck? deck.name:""} onChange={(e)=>{setDeck( {...deck, name: e.target.value} )}} />
            <label>Description</label>
            <textarea value={deck?deck.description:""}  onChange={(e)=>{setDeck( {...deck,"description": e.target.value} )}} />
            <button>Submit</button>
            <button>Cancel</button>
        </form>
        
      </div>
  );
}

export default DeckForm;
