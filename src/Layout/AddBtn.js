import React from "react";
import { useHistory } from "react-router-dom";

function AddBtn() {
  let history = useHistory();

  function handleClick() {
    history.push("/decks/new");
  }

  return (
      <div className="">
        <span className="" onClick={handleClick}>+</span>
        <p className="">Create Deck</p>
      </div>
  );
}

export default AddBtn;
