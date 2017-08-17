import React from 'react';
import ReactDOM from 'react-dom';
import {Router, browserHistory} from 'react-router';
import {Provider} from 'react-redux';
import {createStore} from 'redux';

import reducers from './reducers';
import routes from './routes';
import './index.css';


const fakeState = {
  games: {'f': {id: 'f', name: "Fun Times", size: 3, words: ['yay', 'hooray', 'wooo'], playerCount: 4}},
};

const store = createStore(reducers, fakeState);

ReactDOM.render(
  <Provider store={store}>
    <Router routes={routes} history={browserHistory} />
  </Provider>,
  document.getElementById('root')
);

