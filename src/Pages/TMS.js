import React from "react";
import { Link } from "react-router-dom";

export default function TMS() {
  return (
    <div className="App">
      <Link to={{ pathname: "/taskEnd" }}>
        <h1>{window.location.pathname}</h1>
      </Link>{" "}
      <Link to={{ pathname: "/end" }}>Continue</Link>
    </div>
  );
}
