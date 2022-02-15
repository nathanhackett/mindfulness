import React from "react";
import { Link } from "react-router-dom";

export default function SampleSorting() {
  return (
    <div className="App">
      <Link to="/">
        <h1>{window.location.pathname}</h1>
      </Link>{" "}
      <Link to={{ pathname: "/tutorialEnd" }}>Continue</Link>
    </div>
  );
}
