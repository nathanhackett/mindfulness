import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";

export default function Introduction() {
  return (
    <div className="App">
      <h1>Introduction</h1>
      <br />
      <div className="introductionContainer">
        <div>
          <h2 className="text">About Mindfulness Measure</h2>
          <p>
            Mindfulness is characterised by a focused, non-evaluative attention
            to and awareness of the present moment. In recent years the advent
            of social media, SPA's, endless scrolling, etc., means that computer
            interfaces are likely to cause people to lose mindfulness and
            experience feelings such as missing time.
            <br />
            <br />
            This application will require you, the participant, to undertake 6
            specific tasks. The tasks are designed in such a way to evoke a
            concentrative state and sense of self-awareness, a crucial aspect of
            this research project. <br /> Upon completion of the tasks you will
            be asked to complete a short survey based on the "Toronto
            Mindfulness Scale" with regard to the tasks you have just completed.
            <br />
            <br />
            Before commencing, we will present a{" "}
            <b>tutorial of 2 sample tasks</b> that will demonstrate what you
            will be asked.
          </p>
        </div>
      </div>
      <br />
      <br />
      <Button
        component={Link}
        to={{ pathname: "/sampleTask" }}
        className="btn"
        style={{ textTransform: "capitalize", color: "grey" }}
      >
        Begin Tutorial
      </Button>
    </div>
  );
}
