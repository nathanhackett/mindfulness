import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";

export default function Task2() {
  return (
    <div className="App">
      <Link to={{ pathname: "/tutorialEnd" }}>
        <h1>{window.location.pathname}</h1>
      </Link>
      <Button
        component={Link}
        to={{ pathname: "/task3" }}
        className="btn"
        style={{ textTransform: "capitalize", color: "grey" }}
      >
        Continue
      </Button>
    </div>
  );
}
