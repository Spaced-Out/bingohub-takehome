/**
 * constants
 */

export const ADD_GAME = 'ADD_GAME';


/**
 * action creators
 */

export function addGame(game) {
  return {
    type: ADD_GAME,
    game,
  };
}

