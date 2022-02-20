import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import TextField from "@mui/material/TextField";
import { ImageList } from "@mui/material";
import { ImageListItem } from "@mui/material";

const itemData = [
  {
    img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
    title: "Breakfast",
  },
];

export default function Task4() {
  return (
    <div className="App">
      <Link to={{ pathname: "/tutorialEnd" }}>
        <h1>Task 4</h1>
      </Link>
      @TODO: Timer, Restart button
      <div
        style={{
          paddingLeft: "30%",
          paddingRight: "30%",
          display: "inline-block",
          width: "fit-content",
        }}
      >
        <ImageList cols={1}>
          {itemData.map((item) => (
            <ImageListItem key={item.img}>
              <img
                src={`${item.img}?fit=crop&auto=format`}
                srcSet={`${item.img}?fit=crop&auto=format&dpr=2 2x`}
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
      </form>
      <Button
        component={Link}
        to={{ pathname: "/task5" }}
        className="btn"
        style={{ textTransform: "capitalize", color: "grey" }}
      >
        Continue
      </Button>
    </div>
  );
}
