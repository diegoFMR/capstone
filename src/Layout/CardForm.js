import React,{useEffect, useState } from "react";
import {useParams} from 'react-router-dom'
// import AddBtn from "./AddBtn";
import {createCard, readDeck, updateCard, readCard} from "../utils/api";
// import Decks from "./Decks.js";

function CardForm() {
    const [deck, setDeck] = useState();
    const { deckId, cardId} = useParams();
    //Callback for useEffect
    const [card, setCard] = useState({});

    const onSubmit = async (e)=>{
        e.preventDefault();
        try{
            if(!parseInt(cardId)){
                const response = await createCard(deckId, card);
                alert("Information added sucessfully!");
            }else{
                const response = await updateCard(card);
                alert("Information updated sucessfully!");
            }
        }catch(er){
            console.log(er);
        }
    }
    //[] parameter is for componentDidMount
    useEffect( ()=>{
        async function getDecks(){
            try{
                if(parseInt(cardId)){
                    const resp = await readCard(cardId);
                    setCard(resp);
                    const response = await readDeck(resp.deckId);
                    setDeck(response);
                }else{
                    const response = await readDeck(deckId);
                    setDeck(response);
                }
            }catch(err){
                console.log(err)
            }
        }

        getDecks();
    }, []);

  return (
      <div className="">
        <h2>{deck? deck.name:""}</h2>
        <form onSubmit={onSubmit}>
            <label>Front</label>
            <textarea value={card? card.front:""} onChange={(e)=>{setCard({ ...card,front: e.target.value})}} />
            <label>Back</label>
            <textarea value={card?card.back:""}  onChange={(e)=>{setCard({ ...card, back: e.target.value})}}/>
            <button>Add Card</button>

        </form>
        
      </div>
  );
}

export default CardForm;
