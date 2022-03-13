import React, { useState } from "react";
import { db, auth } from "../firebase";
import { doc, updateDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { Button, ImageList, ImageListItem, FormControl } from "@mui/material";
import TextField from "@mui/material/TextField";
import Timer from "../Components/Timer";

const itemData = [
  {
    img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
    title: "Breakfast",
  },
];

export default function Task5() {
  const [ans1, setAns1] = useState("");
  const [ans2, setAns2] = useState("");
  const [emptyAns, setEmptyAns] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async () => {
    const user = auth.currentUser;
    if (user !== null) {
      const uid = user.uid;
      if ((ans1 !== "") & (ans2 !== "")) {
        updateDoc(doc(db, "users", uid), {
          task5Field1: ans1,
          task5Field2: ans2,
        });
        navigate("/task6");
      } else {
        setEmptyAns("Please don't leave any fields blank!");
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
            Image 5
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
      </form>
      <div style={{ color: "#6e6e6e" }}>
        <b>{emptyAns}</b>
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
