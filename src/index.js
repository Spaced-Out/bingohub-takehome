import React from 'react';
import ReactDOM from 'react-dom';
import {Router, browserHistory} from 'react-router';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware, compose} from 'redux';

import reducers from './reducers';
import routes from './routes';
import './index.css';


const fakeState = {
  games: {0: {id: 0, name: "Animals", size: 3, words: ['bear', 'penguin', 'frog', 'dog', 'cat', 'whale', 'seal', 'chicken', 'cow'], playerCount: 4}},
};

const router = <Router routes={routes} history={browserHistory} />;

const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
  }) : compose;

const enhancer = composeEnhancers(
  applyMiddleware(({ getState, dispatch }) => {
    return (next) => (action) => {
      let returnValue = next(action);

      if (action.type === 'ADD_GAME') {
        const games = getState().games;
        const newestGame = Object.keys(games).reduce((a, b) => 
          games[a] > games[b] ? a : b );
        const urlPath = `/${newestGame}`;
        router.props.history.push(urlPath);
      }

      return returnValue;
    }
  })
);

const store = createStore(
  reducers,
  fakeState,
  enhancer,
);

ReactDOM.render(
  <Provider store={store}>
    {router}
  </Provider>,
  document.getElementById('root')
);
