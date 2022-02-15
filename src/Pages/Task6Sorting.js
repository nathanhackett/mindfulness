import React from "react";
import { Link } from "react-router-dom";

export default function Task6Sorting() {
  return (
    <div>
      <Link to={{ pathname: "/tutorialEnd" }}>
        <h1>{window.location.pathname}</h1>
      </Link>
      <Link to={{ pathname: "/taskEnd" }}>Continue</Link>
    </div>
  );
}
