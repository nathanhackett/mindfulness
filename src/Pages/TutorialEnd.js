import React from "react";
import { Link } from "react-router-dom";

export default function TutorialEnd() {
  return (
    <div className="App">
      <Link to="/">
        <h1>{window.location.pathname}</h1>
      </Link>
      <p>
        Well done, you have completed the tutorial! The tasks are as simple as
        that. Click on the begin button below to start the tasks. You will be
        able to restart the tasks at any point you wish.
      </p>
      <Link to={{ pathname: "/task1" }}>Continue</Link>
    </div>
  );
}
