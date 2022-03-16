import React, { useState } from "react";
import { auth, db } from "../firebase";
import { doc, updateDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import {
  Button,
  ImageList,
  FormControl,
  Tooltip,
  MenuItem,
  TextField,
  Skeleton,
} from "@mui/material";
import Taskbar from "../Components/Taskbar";
import { Rating } from "../Components/Rating";

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
        // } else if (ans1 || ans2 || ans3 || ans4 || ans5 === null) {
        //   setSameAns("Please provide a value for all fields.");
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
        <Tooltip
          arrow
          placement="top"
          title="You will then be asked to sort the images as per the description below using the dropdown selections."
        >
          <p className="text">
            Based on the below images, please Rate them 1-5 in order of how easy
            you find it to determine{" "}
            <b>what the picture is depicting (or attempting to depict)</b> ,
            where <b>1 is easiest</b>, <b>5 is hardest.</b>
          </p>
        </Tooltip>
        <p className="text">
          (Aside: the below images are placeholders to show where the images
          will be in the actual task, the grey boxes are displaying correctly.)
        </p>
      </div>
      <br />
      <br />

      <ImageList cols={5} rowHeight={300} gap={20} justifyContent="center">
        <Skeleton
          variant="rectangular"
          height={300}
          width="auto"
          style={{ borderRadius: "10px" }}
        >
          Image 1
        </Skeleton>
        <Skeleton
          variant="rectangular"
          height={300}
          width="auto"
          style={{ borderRadius: "10px" }}
        >
          Image 2
        </Skeleton>
        <Skeleton
          variant="rectangular"
          height={300}
          width="auto"
          style={{ borderRadius: "10px" }}
        >
          Image 3
        </Skeleton>
        <Skeleton
          variant="rectangular"
          height={300}
          width="auto"
          style={{ borderRadius: "10px" }}
        >
          Image 4
        </Skeleton>
        <Skeleton
          variant="rectangular"
          height={300}
          width="auto"
          style={{ borderRadius: "10px" }}
        >
          Image 5
        </Skeleton>

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
