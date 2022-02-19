import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";

export default function TutorialEnd() {
  return (
    <div className="App">
      <h1>Ready?</h1>
      <br />
      <div className="textContainer">
        <p className="text">
          Well done, you have completed the tutorial! The tasks are as simple as
          that.
          <br />
          <br />
          Click on the begin button below to start the tasks. You will be able
          to restart the tasks at any point you wish.
        </p>
      </div>

      <div className="btnContainer">
        <div>
          <Button
            component={Link}
            to={{ pathname: "/introduction" }}
            className="btn"
            style={{
              textTransform: "capitalize",
              color: "grey",
              margin: "10px",
            }}
          >
            Repeat Tutorial
          </Button>
          <Button
            component={Link}
            to={{ pathname: "/task1" }}
            className="btn"
            style={{
              backgroundColor: "#30d34677",
              textTransform: "capitalize",
              color: "grey",
              margin: "10px",
            }}
          >
            Begin Tasks
          </Button>
        </div>
      </div>
    </div>
  );
}
