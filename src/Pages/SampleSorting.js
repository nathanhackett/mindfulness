import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import { ImageList } from "@mui/material";
import { ImageListItem } from "@mui/material";
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

export default function SampleSorting() {
  return (
    <div className="App">
      <h1>Sample Sorting Task</h1>
      <br />
      {/* @TODO: Research drag and drop in ReactJS */}
      {/* @TODO: Pinterest API vs Image list */}
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
        <Skeleton variant="rectangular" height={300} width="auto">
          +
        </Skeleton>
        <Skeleton variant="rectangular" height={300} width="auto">
          +
        </Skeleton>
        <Skeleton variant="rectangular" height={300} width="auto">
          +
        </Skeleton>
        <Skeleton variant="rectangular" height={300} width="auto">
          +
        </Skeleton>
        <Skeleton variant="rectangular" height={300} width="auto">
          +
        </Skeleton>
      </ImageList>
      <Button
        component={Link}
        to={{ pathname: "/tutorialEnd" }}
        className="btn"
        style={{ textTransform: "capitalize", color: "grey" }}
      >
        Continue
      </Button>
    </div>
  );
}
