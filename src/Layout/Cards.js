import React from "react";
import { useHistory } from "react-router-dom";

function Card({cards}) {

    const history = useHistory();
    console.log(cards)
    function onClickEdit(deckId){
        history.push(`/decks/${deckId}/edit`);
    }

    function onClickDelete(){
        if(window.confirm("Delete this deck?")){
            console.log("fired. good")
        }
    }

  return (
      <div className="">
        {
            
            cards.map((c)=>(
                <div key={c.id ? c.id: 452 }>
                    <textarea value={c.front} onChange={()=>{}}/>
                    <p>{c.back}</p>
                    <div onClick={()=>onClickEdit(c.deckId)}>Edit </div>
                    <div onClick={()=>onClickDelete(c.id)}>Delete </div>
                </div>
            ))
        }
      </div>
  );
}

export default Card;
