import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import { ImageList } from "@mui/material";
import { ImageListItem } from "@mui/material";
import { Skeleton } from "@mui/material";
import { FormControl } from "@mui/material";
import { TextField } from "@mui/material";
import { MenuItem } from "@mui/material";
import { Tooltip } from "@mui/material";
import Timer from "../Components/Timer";

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

const rating = [
  {
    default: "",
  },
  {
    value: "1",
    label: "1",
  },
  {
    value: "2",
    label: "2",
  },
  {
    value: "3",
    label: "3",
  },
  {
    value: "4",
    label: "4",
  },
  {
    value: "5",
    label: "5",
  },
];

export default function SampleSorting() {
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
          <Tooltip
            placement="top"
            title="This research is being conducted in accordance with University
              security and privacy policies.
              This information is necessary in identifying demographic patterns
              in the sample response collection.
              It also provides a means of identifying participants and reaching
              out to whom it may concern."
          >
            <button
              className="btn"
              style={{
                color: "red",
                position: "relative",
                top: "15%",
                fontWeight: "bold",
              }}
              disabled={true}
            >
              Restart
            </button>
          </Tooltip>
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
      <br />
      <div className="textContainer">
        <p className="text">
          Based on the above images, please sort them (Drag & Drop)//Rate 1-5,
          <b> in order of how easy you found it</b> to identify what is being
          depicted, where <b>1 is easiest</b>, <b>5 is hardest</b>
        </p>
      </div>
      <br />
      @TODO: Fix displaying of placeholder boxes
      <ImageList cols={5} rowHeight={300} gap={20} justifyContent="center">
        {/* <Skeleton variant="rectangular" height={300} width="auto">
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
        </Skeleton> */}
        <FormControl
          variant="standard"
          style={{ width: "100%", textAlign: "center" }}
        >
          <TextField
            required
            select
            id="outlined-basic"
            variant="standard"
            // onChange={handleRatingChange}
          >
            {rating.map((rate) => (
              <MenuItem key={rate.value} value={rate.value}>
                {rate.label}
              </MenuItem>
            ))}
          </TextField>
        </FormControl>
        <FormControl
          variant="standard"
          style={{ width: "100%", textAlign: "center" }}
        >
          <TextField
            required
            select
            id="outlined-basic"
            variant="standard"
            // onChange={handleRatingChange}
          >
            {rating.map((rate) => (
              <MenuItem key={rate.value} value={rate.value}>
                {rate.label}
              </MenuItem>
            ))}
          </TextField>
        </FormControl>
        <FormControl
          variant="standard"
          style={{ width: "100%", textAlign: "center" }}
        >
          <TextField
            required
            select
            id="outlined-basic"
            variant="standard"
            // onChange={handleRatingChange}
          >
            {rating.map((rate) => (
              <MenuItem key={rate.value} value={rate.value}>
                {rate.label}
              </MenuItem>
            ))}
          </TextField>
        </FormControl>
        <FormControl
          variant="standard"
          style={{ width: "100%", textAlign: "center" }}
        >
          <TextField
            required
            select
            id="outlined-basic"
            variant="standard"
            // onChange={handleRatingChange}
          >
            {rating.map((rate) => (
              <MenuItem key={rate.value} value={rate.value}>
                {rate.label}
              </MenuItem>
            ))}
          </TextField>
        </FormControl>
        <FormControl
          variant="standard"
          style={{ width: "100%", textAlign: "center" }}
        >
          <TextField
            required
            select
            id="outlined-basic"
            variant="standard"
            // onChange={handleRatingChange}
          >
            {rating.map((rate) => (
              <MenuItem key={rate.value} value={rate.value}>
                {rate.label}
              </MenuItem>
            ))}
          </TextField>
        </FormControl>
      </ImageList>
      <br />
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
