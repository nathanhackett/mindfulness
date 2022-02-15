import React from "react";
import { Link } from "react-router-dom";

export default function Task5() {
  return (
    <div className="App">
      <Link to={{ pathname: "/tutorialEnd" }}>
        <h1>{window.location.pathname}</h1>
      </Link>
      <Link to={{ pathname: "/task6" }}>Continue</Link>
    </div>
  );
}
