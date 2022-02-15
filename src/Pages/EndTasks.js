import React from "react";
import { Link } from "react-router-dom";

export default function EndTasks() {
  return (
    <div className="App">
      <Link to={{ pathname: "/taskEnd" }}>
        <h1>{window.location.pathname}</h1>
      </Link>
      <Link to={{ pathname: "/tms" }}>Continue</Link>
    </div>
  );
}
