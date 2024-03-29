import React from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";

import fromPairs from "lodash/fromPairs";
import filter from "lodash/filter";

import Nav from "./Nav";

import "./Creator.css";

const mapDispatchToProps = (dispatch) => ({
  onSubmit(navigate, event) {
    // TODO add game and navigate to its page
  },
});

const Creator = ({ onSubmit }) => {
  const navigate = useNavigate();

  return (
    <Nav title="New">
      <form className="creator" onSubmit={(event) => onSubmit(navigate, event)}>
        <div className="left-col">
          <label>
            <div>Name</div>
            <input type="text" name="name" />
          </label>

          <label>
            <div>Size</div>
            <select name="size">
              <option value="3">3x3</option>
              <option value="4">4x4</option>
              <option value="5">5x5</option>
            </select>
          </label>

          <label>
            <div>Words</div>
            <textarea name="words"></textarea>
          </label>

          <button className="creator-submit">Create</button>
        </div>

        <div className="right-col">
          <label>
            <div>Players</div>
            <input type="number" name="playerCount" />
          </label>
        </div>
      </form>
    </Nav>
  );
};

export default connect(null, mapDispatchToProps)(Creator);
