import React from "react";
import Header from "./Header";
import NotFound from "./NotFound";
import Home from "./Home";
import Study from "./Study";
import Deck from "./Deck";
import DeckForm from "./DeckForm";
import CardForm from "./CardForm";
import { Route, Switch } from "react-router-dom";

function Layout() {
  return (
    <>
      <Header />
      <div className="container">
        {/* TODO: Implement the screen starting here */}
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/decks/new">
            <DeckForm />
          </Route>
          <Route exact path="/decks/:deckId">
            <Deck />
          </Route>
          <Route exact path="/decks/:deckId/study">
            <Study hide={true}/>
          </Route>
          <Route exact path="/decks/:deckId/edit">
            <DeckForm />
          </Route>

          <Route exact path="/decks/:deckId/cards/new">
            <CardForm />
          </Route>
          <Route exact path="/decks/:deckId/cards/:cardId/edit">
            <Deck />
          </Route>

          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </div>
    </>
  );
}

export default Layout;
