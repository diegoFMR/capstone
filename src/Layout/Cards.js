import React from "react";
import { useHistory } from "react-router-dom";
import { deleteCard } from "../utils/api";

function Card({cards}) {

    const history = useHistory();
    
    function onClickEdit(deckId, id){
        history.push(`/decks/${deckId}/cards/${id}/edit`);
    }

    async function onClickDelete(id){
        if(window.confirm("Delete this deck?")){
            try{
                const resp = await deleteCard(id);
                alert("Deleted sucessfully");
            }catch(err){
                console.log(err)
            }
        }
    }

  return (
      <div className="">
        {
            
            cards.map((c)=>(
                <div key={c.id ? c.id: 452 }>
                    <textarea value={c.front} onChange={()=>{}}/>
                    <p>{c.back}</p>
                    <div className="btn study" onClick={()=>onClickEdit(c.deckId, c.id)}>Edit </div>
                    <div className="btn red" onClick={()=>onClickDelete(c.id)}>Delete </div>
                </div>
            ))
        }
      </div>
  );
}

export default Card;
