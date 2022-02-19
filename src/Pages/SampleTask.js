import React from "react";
import { Link } from "react-router-dom";
import "../App.css";
import TextField from "@mui/material/TextField";
import { ImageList } from "@material-ui/core";
import { ImageListItem } from "@material-ui/core";
import { Button } from "@mui/material";

const itemData = [
  {
    img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
    title: "Breakfast",
  },
];

export default function SampleTask() {
  return (
    <div className="App">
      <h1>Sample Task</h1>
      <br />
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
            id="outlined-basic"
            label="What do you see in the image above?"
            variant="outlined"
          />
        </div>

        <div className="responseFields">
          <TextField
            className="responseInput"
            id="outlined-basic"
            label="Does this image mean anything to you?"
            variant="outlined"
          />
          <br />
          <br />
        </div>
        <div className="helpBubble">
          <div className="speechBubbleTemplate">
            This research is being conducted in accordance with University
            security and privacy policies. <br />
            This information is necessary in identifying demographic patterns in
            the sample response collection. <br />
            It also provides a means of identifying participants and reaching
            out to whom it may concern.
          </div>
        </div>
      </form>

      <Button
        component={Link}
        to={{ pathname: "/sampleSort" }}
        className="btn"
        style={{ textTransform: "capitalize", color: "grey" }}
      >
        Continue
      </Button>
    </div>
  );
}
