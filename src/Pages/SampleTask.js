import React from "react";
import { Link } from "react-router-dom";
import "../App.css";
import { TextField } from "@material-ui/core";
import { ImageList } from "@material-ui/core";
import { ImageListItem } from "@material-ui/core";

const itemData = [
  {
    img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
    title: "Breakfast",
  },
];

export default function SampleTask() {
  return (
    <div className="App">
      <Link to="/">
        <h1>{window.location.pathname}</h1>
      </Link>
      <h1>@TODO: Pinterest API or hardcode image set</h1>
      <div className="imagesContainer">
        <ImageList cols={1} rowHeight={300}>
          {itemData.map((item) => (
            <ImageListItem key={item.img}>
              <img
                src={`${item.img}?fit=crop&auto=format`}
                alt={item.title}
                loading="lazy"
              />
            </ImageListItem>
          ))}
        </ImageList>
      </div>

      <form className="formContainer">
        <div className="responseFields">
          <TextField
            className="responseInput"
            id="standard-basic"
            label="What do you see in the image above?"
            variant="standard"
          />
        </div>

        <div className="responseFields">
          <TextField
            className="responseInput"
            id="standard-basic"
            label="Does this image mean anything to you?"
            variant="standard"
          />
          <br />
          <br />
        </div>
        <div className="helpBubble">
          <p className="speechHover" style={{ color: "grey" }}>
            Why do we need this information?
          </p>
          <div className="speechBubble">
            This research is being conducted in accordance with University
            security and privacy policies. <br />
            This information is necessary in identifying demographic patterns in
            the sample response collection. <br />
            It also provides a means of identifying participants and reaching
            out to whom it may concern.
          </div>
        </div>
      </form>
      <Link to={{ pathname: "/sampleSort" }} className="btn">
        Continue
      </Link>
    </div>
  );
}
