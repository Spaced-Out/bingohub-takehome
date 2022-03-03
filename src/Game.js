import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import times from "lodash/times";
import chunk from "lodash/chunk";

import Nav from "./Nav";

import "./Game.css";

const Game = () => {
  const { gameId } = useParams();
  const game = useSelector((state) => state.games[gameId]);

  if (!game) {
    return <div>Not Found</div>;
  }

  const cards = generateCards(game);

  return (
    <Nav title={game.name}>
      <div className="game-cards">{/* TODO show game cards */}</div>
    </Nav>
  );
};

export default Game;

function generateCards({ playerCount, size, words }) {
  // TODO generate unique bingo cards for each player
}
