import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";

export default function EndTasks() {
  return (
    <div className="App">
      <h1>One Last Thing!</h1>
      <br />
      <div className="textContainer">
        <p className="text">
          Now that you have completed the tasks, we need your feedback!
          <br />
          <br />
          The following page will present you with the
          <b> Toronto Mindfulness Scale (TMS)</b>, a scale that assesses a
          user’s “state” mindfulness (i.e., what state of mind the user is in).
        </p>
      </div>
      <br />
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
