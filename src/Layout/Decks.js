import React from "react";
import { useHistory } from "react-router-dom";

function Decks({decks}) {

    const history = useHistory();

    function onClickView(deckId){
        history.push(`/decks/${deckId}`);
    }

    function onClickDelete(){
        if(window.confirm("Delete this deck?")){
            console.log("fired. good")
        }
    }

    function onClickStudy(deckId){
        history.push(`/decks/${deckId}/study`);
    }
  return (
      <div className="">
        {
            
            decks.map((d)=>(
                <div key={d.id ? d.id: 2 }>
                    <h1>{d.name}</h1>
                    <p>{d.description}</p>
                    <div>{d.cards?d.cards.length:""} cards</div>
                    <div onClick={()=>onClickView(d.id)}>View </div>
                    <div onClick={()=>onClickStudy(d.id)}>Study </div>
                    <div onClick={()=>onClickDelete(d.id)}>Delete </div>
                </div>
            ))
        }
      </div>
  );
}

export default Decks;
