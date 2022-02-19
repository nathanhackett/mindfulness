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
            This application will require you, the participant, to undertake a
            specific task. The task is designed in such a way to evoke a sense
            of self-awareness of your responses, a crucial aspect of this
            research project. <br /> Upon completion of the task you will be
            asked to complete a short survey based on the "Toronto Mindfulness
            Scale" with regard to the task you have just completed.
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
