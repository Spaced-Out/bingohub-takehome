import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";

import reducers from "./reducers";
import AppRoutes from "./routes";
import "./index.css";

const fakeState = {
  games: {
    f: {
      id: "f",
      name: "Animals",
      size: 3,
      words: [
        "bear",
        "penguin",
        "frog",
        "dog",
        "cat",
        "whale",
        "seal",
        "chicken",
        "cow",
      ],
      playerCount: 4,
    },
  },
};

const store = createStore(reducers, fakeState);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>{AppRoutes}</BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
