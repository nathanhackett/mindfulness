import React, { useState } from "react";
import { db, auth } from "../firebase";
import { doc, updateDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import {
  Button,
  ImageList,
  ImageListItem,
  FormControl,
  MenuItem,
} from "@mui/material";
import TextField from "@mui/material/TextField";
import Timer from "../Components/Timer";
import { Images } from "../Components/Images";

const options = [
  {
    default: "",
  },
  {
    value: "What image depicts",
    label: "What the image depicts",
  },
  {
    value: "How image depicted",
    label: "How the image is depicted",
  },
];

export default function Task3() {
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
          task3Field1: ans1,
          task3Field2: ans2,
        });
        navigate("/task4");
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
            Image 3
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
          {Images.map((image) => (
            <ImageListItem key={image.img}>
              {image.title === "Image 3" && (
                <img
                  src={`${image.img}?fit=crop&auto=format`}
                  srcSet={`${image.img}?fit=crop&auto=format&dpr=2 2x`}
                  alt={image.title}
                  loading="lazy"
                />
              )}
            </ImageListItem>
          ))}
        </ImageList>
      </div>
      <form className="formContainer">
        <div className="responseFields">
          <TextField
            select
            className="responseInput"
            id="outlined-basic"
            label="What did you notice first?"
            variant="outlined"
            value={ans1}
            onChange={(event) => {
              setAns1(event.target.value);
            }}
          >
            {options.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
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
