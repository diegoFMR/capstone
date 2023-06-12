import React, {useState,useEffect} from "react";
import { useParams, useHistory} from 'react-router-dom';
import {readDeck} from "../utils/api";

function Study({hide}) {
    const { deckId } = useParams();
    const [ deck, setDeck] = useState({});
    const [ index, setIndex] = useState(1);
    const [ isFront, setIsFront] = useState(true);
    const [ hideS, setHideS] = useState(hide);
    const history = useHistory();
    //const to show index of the card showing


  const onClickFlip = (e)=>{
    e.preventDefault();
    setIsFront(!isFront);
    if(hideS){
      setHideS(false);
    }
  }

  const onClickNext = (e)=>{
    e.preventDefault();
    setIsFront(true);
    setIndex(index+1);
  }

    const onClick = (e)=>{
      e.preventDefault();
      history.push(`/decks/${deckId}/cards/new`);
    }

    //Callback for useEffect
    useEffect( ()=>{
      async function getDecks(){    
        const response = await readDeck(deckId);
        setDeck(response);
      }

      getDecks();
    }, []);

  return (
      <div className="">
        <div onClick={onClick}>
         <span>()</span> <p>Home/{deck.name}/Study </p>
        </div>
        <h1>Study:</h1><h1>{deck.name}</h1> 
        <div>
          Card {index} of {deck.cards ? deck.cards.length: 1}
          {deck.cards? deck.cards.length <2? <p>Not enough cards</p>:"":"" }
          <p>{ deck.cards ?(isFront && deck.cards[index-1] ?deck.cards[index-1].front:deck.cards[index-1]?deck.cards[index-1].back:"" ): "" }</p>
          <button onClick={(e)=>onClickFlip(e)}> Flip </button>
          <button onClick={(e)=>onClickNext(e)}> {hideS? "":'Next'} </button><br/>
          <button onClick={(e)=>onClick(e)}> Add card </button>
        </div>
      </div>
  );
}

export default Study;
