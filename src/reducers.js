import uniqueId from 'lodash/uniqueId';

import * as actions from './actions';


export default function bingohub(state = {}, action) {
  return {
    games: games(state.games, action),
  };
}

function games(games = {}, action) {
  switch (action.type) {
    case actions.ADD_GAME:
      const game = action.game;
      const id = uniqueId();
      return {
        ...games,
        [id]: {...game, id},
      };

    default:
      return games;
  }
}

