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
import Timer from "../Components/Timer";
import { Rating } from "../Components/Rating";

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
  const [ans1, setAns1] = useState(0);
  const [ans2, setAns2] = useState(0);
  const [ans3, setAns3] = useState(0);
  const [ans4, setAns4] = useState(0);
  const [ans5, setAns5] = useState(0);

  const navigate = useNavigate();
  const [sameAns, setSameAns] = useState("");

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
          sortingTaskField1: ans1,
          sortingTaskField2: ans2,
          sortingTaskField3: ans3,
          sortingTaskField4: ans4,
          sortingTaskField5: ans5,
        });
        navigate("/taskEnd");
      } else {
        setSameAns("Can't have two of the same values.");
      }
    }
  };

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
      <div className="textContainer">
        <p>
          Based on the above images, please Rate them 1-5
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

      <ImageList cols={5} rowHeight={300} gap={20} justifyContent="center">
        {/* <Skeleton variant="rectangular" height={300} width="auto" />
        <Skeleton variant="rectangular" height={300} width="auto" />
        <Skeleton variant="rectangular" height={300} width="auto" />
        <Skeleton variant="rectangular" height={300} width="auto" />
        <Skeleton variant="rectangular" height={300} width="auto" /> */}
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
            {Rating.map((rate) => (
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
            {Rating.map((rate) => (
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
            {Rating.map((rate) => (
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
            {Rating.map((rate) => (
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
            {Rating.map((rate) => (
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
