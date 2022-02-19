import React from "react";
import { Link } from "react-router-dom";

export default function TutorialEnd() {
  return (
    <div className="App">
      <Link to="/">
        <h1>{window.location.pathname}</h1>
      </Link>
      <div className="textContainer">
        <p className="text">
          Well done, you have completed the tutorial! The tasks are as simple as
          that.
          <br />
          <br />
          Click on the begin button below to start the tasks. You will be able
          to restart the tasks at any point you wish.
        </p>
      </div>

      <div className="btnContainer">
        <div>
          <Link to={{ pathname: "/introduction" }} className="btn">
            Repeat Tutorial
          </Link>
          <Link
            to={{ pathname: "/task1" }}
            className="btn"
            style={{ backgroundColor: "#30d34677" }}
          >
            Begin
          </Link>
        </div>
      </div>
    </div>
  );
}
