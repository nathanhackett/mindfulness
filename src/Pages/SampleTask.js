import React, { useState } from "react";
import { db, auth } from "../firebase";
import { doc, updateDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import "../App.css";
import TextField from "@mui/material/TextField";
import {
  Button,
  ImageList,
  ImageListItem,
  FormControl,
  Tooltip,
} from "@mui/material";
import Timer from "../Components/Timer";
import Unsplash from "../Components/api";

const itemData = [
  {
    img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
    title: "Breakfast",
  },
];

export default function SampleTask() {
  // const getImages = (term) => {
  //   return Unsplash.get("https://api.unsplash.com/search/photos");
  // };

  // const searchImages = (term) => {
  //   getImages;
  // };

  const [ans1, setAns1] = useState("");
  const [ans2, setAns2] = useState("");

  const navigate = useNavigate();
  const handleSubmit = async () => {
    const user = auth.currentUser;
    if (user !== null) {
      const uid = user.uid;
      updateDoc(doc(db, "users", uid), {
        sampleTaskField1: ans1,
        sampleTaskField2: ans2,
      });
      navigate("/sampleSort");
    }
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
            Sample Image
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
