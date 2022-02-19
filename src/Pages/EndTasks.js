import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";

export default function EndTasks() {
  return (
    <div className="App">
      <Link to={{ pathname: "/taskEnd" }}>
        <h1>{window.location.pathname}</h1>
      </Link>
      <div className="textContainer">
        <p className="text">
          Now that you have completed the tasks, we need your feedback!
          <br />
          <br />
          The following page will present you with the
          <b> Toronto Mindfulness Scale (TMS)</b>, a measure
        </p>
      </div>
      <Button
        component={Link}
        to={{ pathname: "/tms" }}
        className="btn"
        style={{ textTransform: "capitalize", color: "grey" }}
      >
        Continue
      </Button>
    </div>
  );
}
