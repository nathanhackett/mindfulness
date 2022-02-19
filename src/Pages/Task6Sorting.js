import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";

export default function Task6Sorting() {
  return (
    <div className="App">
      <Link to={{ pathname: "/tutorialEnd" }}>
        <h1>{window.location.pathname}</h1>
      </Link>
      <div className="textContainer">
        <p className="text">
          Based on the above images, please sort them (Drag & Drop){" "}
          <b>in order of how easy you found it</b> to identify what is being
          depicted.
        </p>
      </div>
      <Button
        component={Link}
        to={{ pathname: "/taskEnd" }}
        className="btn"
        style={{ textTransform: "capitalize", color: "grey" }}
      >
        Continue
      </Button>
    </div>
  );
}
