import React from "react";
import { Link } from "react-router-dom";

export default function Task3() {
  return (
    <div className="App">
      <Link to={{ pathname: "/tutorialEnd" }}>
        <h1>{window.location.pathname}</h1>
      </Link>
      <Link to={{ pathname: "/task4" }}>Continue</Link>
    </div>
  );
}
