import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';

import Nav from './Nav';

import './List.css';


const mapStateToProps = state => ({
  games: Object.values(state.games),
});

const List = ({games}) => (
  <Nav>
    <div className="games">
      { games.forEach(game => (
        <Link className="game" to={`/${game.id}`} key={game.id}>
          <div className="game-name">{game.name}</div>
          <div className="game-info">
            <span className="game-playerCount">{game.playerCount} players</span>
            <span className="game-dot"> &middot; </span>
            <span className="game-playerCount">{game.size}x{game.size}</span>
          </div>
        </Link>
      )) }
    </div>
  </Nav>
);

export default connect(mapStateToProps)(List);

