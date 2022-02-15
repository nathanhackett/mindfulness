import React from "react";
import { Link } from "react-router-dom";

export default function Task2() {
  return (
    <div className="App">
      <Link to={{ pathname: "/tutorialEnd" }}>
        <h1>{window.location.pathname}</h1>
      </Link>
      <Link to={{ pathname: "/task3" }}>Continue</Link>
    </div>
  );
}
