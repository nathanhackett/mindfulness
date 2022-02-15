import React from "react";
import { Link } from "react-router-dom";

export default function SampleSorting() {
  return (
    <div>
      <Link to="/">
        <h1>{window.location.pathname}</h1>
      </Link>{" "}
      <Link to={{ pathname: "/tutorialEnd" }}>Continue</Link>
    </div>
  );
}
