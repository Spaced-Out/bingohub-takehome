import React, { Component } from "react";
import { Link, Outlet } from "react-router-dom";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="app">
        <Outlet />
      </div>
    );
  }
}

export default App;
