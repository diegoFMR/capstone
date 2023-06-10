import React from "react";
import { useHistory } from "react-router-dom";
import { deleteDeck } from "../utils/api";

function Decks({decks}) {

    const history = useHistory();

    function onClickView(deckId){
        history.push(`/decks/${deckId}`);
    }

    async function onClickDelete(id){
        if(window.confirm("Delete this deck?")){
            const response = await deleteDeck(id);
            alert("The deck has been deleted sucessfully!");
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
                    <div className="btn containerr" onClick={()=>onClickView(d.id)}>View </div>
                    <div className="btn study" onClick={()=>onClickStudy(d.id)}>Study </div>
                    <div className="btn study red" onClick={()=>onClickDelete(d.id)}>Delete </div>
                </div>
            ))
        }
      </div>
  );
}

export default Decks;
