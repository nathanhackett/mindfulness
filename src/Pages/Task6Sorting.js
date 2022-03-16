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
} from "@mui/material";
import Timer from "../Components/Timer";
import { Rating } from "../Components/Rating";

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
        // } else if (ans1 || ans2 || ans3 || ans4 || ans5 === null) {
        //   setSameAns("Please provide a value for all fields.");
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
          Based on the below images, please Rate them 1-5 in order of how easy
          you find it to determine{" "}
          <b>what the picture is depicting (or attempting to depict)</b> , where{" "}
          <b>1 is easiest</b>, <b>5 is hardest.</b>
        </p>
      </div>
      <br />
      <div className="imagesContainer">
        <ImageList cols={5} rowHeight={400} gap={20}>
          <ImageListItem>
            <p style={{ padding: "10px" }}>Image 1</p>
            <img
              src="https://i.ibb.co/tZmWBkt/Image-1.jpg"
              alt="Image 1"
              border="0"
            />
          </ImageListItem>
          <ImageListItem>
            <p style={{ padding: "10px" }}>Image 2</p>
            <img
              src="https://i.ibb.co/LzLLVPy/Image-2.jpg"
              alt="Image 2"
              border="0"
            />
          </ImageListItem>
          <ImageListItem>
            <p style={{ padding: "10px" }}>Image 3</p>
            <img
              src="https://i.ibb.co/mqz0wf7/Image-1.jpg"
              alt="Image 3"
              border="0"
            />
          </ImageListItem>
          <ImageListItem>
            <p style={{ padding: "10px" }}>Image 4</p>
            <img
              src="https://i.ibb.co/swbsZwV/Image-4.jpg"
              alt="Image 4"
              border="0"
            />
          </ImageListItem>
          <ImageListItem>
            <p style={{ padding: "10px" }}>Image 5</p>
            <img
              src="https://i.ibb.co/Z24VYYm/Image-5.jpg"
              alt="Image 5"
              border="0"
            />
          </ImageListItem>
        </ImageList>
      </div>

      <ImageList cols={5} rowHeight={300} gap={20} justifyContent="center">
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
