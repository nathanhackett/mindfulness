import React, { useState, useEffect } from "react";
import { db } from "../firebase";
import {
  collection,
  getDocs,
  addDoc,
  deleteDoc,
  userDoc,
  doc,
  updateDoc,
  setDoc,
  Timestamp,
} from "firebase/firestore";
import { Link } from "react-router-dom";
import "../App.css";
import TextField from "@mui/material/TextField";
import { ImageList } from "@mui/material";
import { ImageListItem } from "@mui/material";
import { Button } from "@mui/material";

const itemData = [
  {
    img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
    title: "Breakfast",
  },
];

export default function SampleTask() {
  const [ans1, setAns1] = useState("");
  const [ans2, setAns2] = useState("");

  const handleSubmit = async () => {
    const docRef = doc(db, "users", "one");
    const docData = {
      answer1: ans1,
      answer2: ans2,
    };
    await updateDoc(docRef, docData);
  };

  return (
    <div className="App">
      <h1>Sample Task</h1>
      <br />
      @TODO: Pinterest API or hardcode image set @TODO: Help text bubbles
      <br />
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
            value={ans1}
            onChange={(event) => {
              setAns1(event.target.value);
            }}
          />
        </div>

        <div className="responseFields">
          <TextField
            className="responseInput"
            id="outlined-basic"
            label="Does this image mean anything to you?"
            variant="outlined"
            value={ans2}
            onChange={(event) => {
              setAns2(event.target.value);
            }}
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
        onClick={handleSubmit}
      >
        Continue
      </Button>
    </div>
  );
}
