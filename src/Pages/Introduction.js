import React from "react";
import { Link } from "react-router-dom";

export default function Introduction() {
  return (
    <div className="App">
      <Link to="/">
        <h1>{window.location.pathname}</h1>
      </Link>
      {window.location.pathname}
      <h2>About Mindfulness Measure</h2>
      <p>
        Mindfulness is characterised by a focused, non-evaluative attention to
        and awareness of the present moment. In recent years the advent of
        social media, SPA's, endless scrolling, etc., means that computer
        interfaces are likely to cause people to lose mindfulness and experience
        feelings such as missing time.
        <br />
        <br />
        This application will require you, the participant, to undertake a
        specific task. The task is designed in such a way to evoke a sense of
        self-awareness of your responses, a crucial aspect of this research
        initiative. Upon completion of the task you will be asked to complete a
        short survey based on the "Toronto Mindfulness Scale" [1] with regard to
        the task you have just completed.
        <br />
        <br />
        Before commencing, we will present a tutorial of 2 sample tasks that
        will demonstrate what you will be asked.
      </p>
      <Link to={{ pathname: "/sampleTask" }}>Continue</Link>
    </div>
  );
}
