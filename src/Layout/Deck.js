import React, {useState,useEffect} from "react";
import { useParams, useHistory} from 'react-router-dom';
import {readDeck} from "../utils/api";

import Cards from "./Cards.js";

function Deck() {
    const { deckId } = useParams();
    const [ deck, setDeck] = useState({cards: []});
    const [ index, setIndex] = useState(1);
    const [ isFront, setIsFront] = useState(true);
    const history = useHistory();
    //const to show index of the card showing


  const onClickFlip = (e)=>{
    e.preventDefault();
    setIsFront(!isFront);
  }

  const onClickNext = (e)=>{
    e.preventDefault();
    // if(index == deck.cards.length){
      
    //   if(window.confirm("Restart cards?")){
    //     setIndex(1);  
    //   }else{
    //     history.push("/");
    //   }

    // }else{
    //   setIndex(index+1);
    // }
  }

    const onClick = ()=>{
      history.push("/");
    }

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
        <h2>{deck.name}</h2>
        <h2>{deck.description}</h2>
        <Cards cards={deck.cards} />
      </div>
  );
}

export default Deck;
