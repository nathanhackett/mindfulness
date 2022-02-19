import React from "react";
import { Link } from "react-router-dom";

export default function SampleSorting() {
  return (
    <div className="App">
      <Link to="/">
        <h1>{window.location.pathname}</h1>
      </Link>
      <h1>@TODO: Research drag and drop in ReactJS</h1>
      <h1>@TODO: Pinterest API vs Image list</h1>
      <div className="textContainer">
        <p className="text">
          Based on the above images, please sort them (Drag & Drop){" "}
          <b>in order of how easy you found it</b> to identify what is being
          depicted.
        </p>
      </div>
      <Link to={{ pathname: "/tutorialEnd" }} className="btn">
        Continue
      </Link>
    </div>
  );
}
