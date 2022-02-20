import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";

export default function Task1() {
  return (
    <div className="App">
      <Link to={{ pathname: "/tutorialEnd" }}>
        <h1>Task 1</h1>
      </Link>
      <h1>@TODO: Timer, Restart button</h1>
      <Button
        component={Link}
        to={{ pathname: "/task2" }}
        className="btn"
        style={{ textTransform: "capitalize", color: "grey" }}
      >
        Continue
      </Button>
    </div>
  );
}
