import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from "./App";
import List from "./List";
import Creator from "./Creator";
import Game from "./Game";

export default (
  <Routes>
    <Route path="/" element={<App />}>
      <Route index element={<List />} />
      <Route path="new" element={<Creator />} />
      <Route path=":gameId" element={<Game />} />
    </Route>
  </Routes>
);
