import React, { useState } from "react";
import { db, auth } from "../firebase";
import { doc, updateDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import "../App.css";
import TextField from "@mui/material/TextField";
import { Button, ImageList, ImageListItem } from "@mui/material";
import Taskbar from "../Components/Taskbar";
import { Tooltip } from "@material-ui/core";
import { Images } from "../Components/Images";

export default function SampleTask() {
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
          sampleTaskField1: ans1,
          sampleTaskField2: ans2,
        });
        navigate("/sampleSort");
      } else {
        setEmptyAns("Please don't leave any fields blank!");
      }
    }
  };

  return (
    <div className="App">
      <Taskbar />
      <br />
      <h4 style={{ backgroundColor: "yellow" }}>
        Hover over different elements on the screen!
        <p>Please read each of the tooltips carefully.</p>
      </h4>

      <br />
      <div
        style={{
          paddingLeft: "30%",
          paddingRight: "30%",
          display: "inline-block",
          width: "fit-content",
        }}
      >
        <Tooltip
          arrow
          placement="right"
          title="You will be presented with images containing visaul ambiguity, no more can be said about them!"
        >
          <ImageList cols={1}>
            {Images.map((image) => (
              <ImageListItem key={image.img}>
                {image.title === "Sample Image" && (
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
        </Tooltip>
      </div>
      <form className="formContainer">
        <div className="responseFields">
          <Tooltip
            arrow
            placement="top"
            title="You will be asked questions either relating to the image or your response to it, answer as honestly as you can!"
          >
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
          </Tooltip>
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
