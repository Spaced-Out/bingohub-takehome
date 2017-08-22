import React from 'react';
import ReactDOM from 'react-dom';
import {Router, browserHistory} from 'react-router';
import {Provider} from 'react-redux';
import {createStore} from 'redux';

import reducers from './reducers';
import routes from './routes';
import './index.css';


const fakeState = {
  games: {'f': {id: 'f', name: "Animals", size: 3, words: ['bear', 'penguin', 'frog', 'dog', 'cat', 'whale', 'seal', 'chicken', 'cow'], playerCount: 4}},
};

const store = createStore(
  reducers,
  fakeState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

ReactDOM.render(
  <Provider store={store}>
    <Router routes={routes} history={browserHistory} />
  </Provider>,
  document.getElementById('root')
);
