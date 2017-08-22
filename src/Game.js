import React from 'react';
import {connect} from 'react-redux';
import times from 'lodash/times';

import Nav from './Nav';
import Card from './Card';

import './Game.css';

const mapStateToProps = (state, {params: {gameId}}) => ({
  game: state.games[gameId],
});

const Game = ({game}) => {
  if (!game) {
    return <div>Not Found</div>;
  }

  return (
    <Nav title={game.name}>
      <div className="game-cards">
        {generateCards(game)}
      </div>
    </Nav>
  );
};

export default connect(mapStateToProps)(Game);

function generateCards({playerCount, size, words}) {
  return times(playerCount, (index) =>
    <Card key={index} size={size} words={words} />
  );
}
