import React from 'react';
import {connect} from 'react-redux';
import times from 'lodash/times';
import chunk from 'lodash/chunk';

import Nav from './Nav';

import './Game.css';


const mapStateToProps = (state, {params: {gameId}}) => ({
  game: state.games[gameId],
});

const Game = ({game}) => {
  if (!game) {
    return <div>Not Found</div>;
  }

  const cards = generateCards(game);

  return (
    <Nav title={game.name}>
      <div className="game-cards">
        { /* TODO show game cards */ }
      </div>
    </Nav>
  );
};

export default connect(mapStateToProps)(Game);


function generateCards({playerCount, size, words}) {
  // TODO generate unique bingo cards for each player
}
