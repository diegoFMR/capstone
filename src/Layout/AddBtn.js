import React from "react";
import { useHistory } from "react-router-dom";

function AddBtn() {
  let history = useHistory();

  function handleClick() {
    history.push("/decks/new");
  }

  return (
      <div className="btn containerr" onClick={handleClick}>
        <span className="create-btn" >+</span>
        <span className="">Create Deck</span>
      </div>
  );
}

export default AddBtn;
