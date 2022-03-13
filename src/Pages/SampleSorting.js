import React, { useState } from "react";
import { auth, db } from "../firebase";
import { doc, updateDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import {
  Button,
  ImageList,
  ImageListItem,
  FormControl,
  MenuItem,
  TextField,
  Skeleton,
} from "@mui/material";
import Taskbar from "../Components/Taskbar";

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
    value: 1,
    label: "1",
  },
  {
    value: 2,
    label: "2",
  },
  {
    value: 3,
    label: "3",
  },
  {
    value: 4,
    label: "4",
  },
  {
    value: 5,
    label: "5",
  },
];

export default function SampleSorting() {
  const [ans1, setAns1] = useState(0);
  const [ans2, setAns2] = useState(0);
  const [ans3, setAns3] = useState(0);
  const [ans4, setAns4] = useState(0);
  const [ans5, setAns5] = useState(0);
  const [sameAns, setSameAns] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async () => {
    const user = auth.currentUser;
    if (user !== null) {
      const uid = user.uid;
      if (
        (ans1 !== ans2 || ans3 || ans4 || ans5) &
        (ans2 !== ans1 || ans3 || ans4 || ans5) &
        (ans3 !== ans1 || ans2 || ans4 || ans5) &
        (ans4 !== ans1 || ans2 || ans3 || ans5) &
        (ans5 !== ans1 || ans2 || ans3 || ans4)
      ) {
        updateDoc(doc(db, "users", uid), {
          sampleSortingTask1: ans1,
          sampleSortingTask2: ans2,
          sampleSortingTask3: ans3,
          sampleSortingTask4: ans4,
          sampleSortingTask5: ans5,
        });
        navigate("/tutorialEnd");
      } else {
        setSameAns("Can't have two of the same values.");
      }
    }
  };

  return (
    <div className="App">
      <Taskbar />
      <div className="textContainer">
        <br />
        <p className="text">
          Based on the below images, please rate them 1-5
          <b> in order of how easy you found it</b> to identify what is being
          depicted, where <b>1 is easiest</b>, <b>5 is hardest.</b>
        </p>
      </div>
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
            value={ans1}
            onChange={(event) => {
              setAns1(event.target.value);
            }}
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
            value={ans2}
            onChange={(event) => {
              setAns2(event.target.value);
            }}
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
            value={ans3}
            onChange={(event) => {
              setAns3(event.target.value);
            }}
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
            value={ans4}
            onChange={(event) => {
              setAns4(event.target.value);
            }}
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
            value={ans5}
            onChange={(event) => {
              setAns5(event.target.value);
            }}
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
      <div style={{ color: "#FF0000" }}>
        <b>{sameAns}</b>
      </div>
      <br />
      <Button
        className="btn"
        style={{ textTransform: "capitalize", color: "grey" }}
        onClick={handleSubmit}
      >
        Continue
      </Button>
    </div>
  );
}
