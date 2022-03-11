import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button, ImageList, ImageListItem, FormControl } from "@mui/material";
import TextField from "@mui/material/TextField";
import Timer from "../Components/Timer";
import { Skeleton } from "@mui/material";

const itemData = [
  {
    img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
    title: "Breakfast",
  },
  {
    img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
    title: "Burger",
  },
  {
    img: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
    title: "Camera",
  },
  {
    img: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",
    title: "Coffee",
  },
  {
    img: "https://images.unsplash.com/photo-1533827432537-70133748f5c8",
    title: "Hats",
  },
];

export default function Task6Sorting() {
  const navigate = useNavigate();
  const handleRestart = () => {
    navigate("/tutorialEnd");
  };
  return (
    <div className="App">
      <ImageList
        cols={3}
        rowHeight={300}
        gap={20}
        justifyContent="center"
        style={{ backgroundColor: "#e8e8e8" }}
      >
        <FormControl
          variant="standard"
          style={{
            width: "100%",
            textAlign: "center",
            alignItems: "center",
          }}
        >
          <button
            className="btn"
            style={{
              color: "red",
              position: "relative",
              top: "15%",
              fontWeight: "bold",
            }}
            onClick={handleRestart}
          >
            Restart
          </button>
        </FormControl>
        <FormControl
          variant="standard"
          style={{ width: "100%", textAlign: "center" }}
        >
          <h1
            style={{
              position: "relative",
              top: "8%",
            }}
          >
            Sorting Task
          </h1>
        </FormControl>
        <FormControl
          variant="standard"
          style={{ width: "100%", textAlign: "center" }}
        >
          <Timer />
        </FormControl>
      </ImageList>
      <br />
      <div className="imagesContainer">
        <ImageList cols={5} rowHeight={300} gap={20}>
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
      <div className="textContainer">
        <p className="text">
          Based on the above images, please sort them (Drag & Drop)
          <b>in order of how easy you found it</b> to identify what is being
          depicted.
        </p>
      </div>
      @TODO: Fix displaying of placeholder boxes
      <ImageList cols={5} rowHeight={300} gap={20} justifyContent="center">
        <Skeleton variant="rectangular" height={300} width="auto" />
        <Skeleton variant="rectangular" height={300} width="auto" />
        <Skeleton variant="rectangular" height={300} width="auto" />
        <Skeleton variant="rectangular" height={300} width="auto" />
        <Skeleton variant="rectangular" height={300} width="auto" />
      </ImageList>
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
