//backend imports
import React, { useState } from "react";
import { auth, db } from "../firebase";
import { doc, setDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

//frontend imports
import "../App.css";
import { TextField } from "@mui/material";
import { MenuItem } from "@material-ui/core";
import { Button } from "@mui/material";
import { Tooltip } from "@mui/material";

export default function LandingPage() {
  const [newName, setNewName] = useState(""); //state to hold user name, initialise as empty string
  const [newAge, setNewAge] = useState(""); //state to hold user age, initialise as 0
  const [newEmail, setNewEmail] = useState(""); //state to hold user email, initialise as empty string
  const [newPassword, setNewPassword] = useState("");
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const navigate = useNavigate();
  const [signUpError, setSignUpError] = useState("");
  const [loginEmailError, setloginEmailError] = useState("");
  const [loginPasswordError, setloginPasswordError] = useState("");
  //const [user, setUser] = useState({});

  const signUp = async () => {
    createUserWithEmailAndPassword(auth, newEmail, newPassword) //from firebase docs, function returns promise, user information stored in "user"
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        setDoc(doc(db, "users", user.uid), {
          participantName: newName,
          participantAge: newAge,
          participantEmail: newEmail,
          participantPassword: newPassword,
        });
        navigate("/introduction");
        console.log(user);
      })
      .catch((error) => {
        console.log(error.message);
        setSignUpError(
          error.message === "Firebase: Error (auth/invalid-email)."
            ? "Invalid Email"
            : "Invalid Password"
        );
      });
  };

  const login = async () => {
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      ); //await function will return promise, user information stored in "user"
      navigate("/introduction");
      console.log(user);
    } catch (error) {
      console.log(error.message);
      setloginEmailError(
        error.message === "Firebase: Error (auth/invalid-email)." ||
          (error.message === "Firebase: Error (auth/user-not-found)." &&
            "Invalid Email")
      );
      setloginPasswordError(
        error.message === "Firebase: Error (auth/internal-error)." ||
          (error.message === "Firebase: Error (auth/wrong-password)." &&
            "Incorrect Password")
      );
    }
  };

  const ages = [
    {
      default: "",
    },
    {
      value: "<12",
      label: "<12",
    },
    {
      value: "13-19",
      label: "13-19",
    },
    {
      value: "20-29",
      label: "20-29",
    },
    {
      value: "30-39",
      label: "30-39",
    },
    {
      value: "40-49",
      label: "40-49",
    },
    {
      value: "50-59",
      label: "50-59",
    },
    {
      value: "60+",
      label: "60+",
    },
  ];

  return (
    <div className="App">
      <h1>Mindfulness Measure</h1>
      <br />
      <h4>A Maynooth University Research Initiative</h4>
      <br />
      <div className="adjacent">
        <form className="formContainer">
          {/* ---(C)RUD--- */}
          <div className="formFields">
            <h4>For New Users</h4>
            <br />
            <TextField
              className="formInput"
              id="outlined-basic"
              label="Name"
              variant="outlined"
              helperText="Please enter your Full name"
              onChange={(event) => {
                setNewName(event.target.value);
              }}
              required
            />
          </div>
          <div className="formFields">
            <TextField
              className="formInput"
              select
              id="outlined-basic"
              label="Age"
              variant="outlined"
              helperText="Please select your age bracket"
              onChange={(event) => {
                setNewAge(event.target.value);
              }}
              required
            >
              {ages.map((age) => (
                <MenuItem key={age.value} value={age.value}>
                  {age.label}
                </MenuItem>
              ))}
            </TextField>
          </div>
          <div className="formFields">
            <TextField
              className="formInput"
              id="outlined-basic"
              label="Email"
              variant="outlined"
              helperText="Please enter your MU mail"
              onChange={(event) => {
                setNewEmail(event.target.value);
              }}
              required
            />
          </div>
          <div className="formFields">
            <TextField
              className="formInput"
              id="outlined-basic"
              label="Password"
              type="password"
              variant="outlined"
              helperText="Please enter a generic password (>6 characters) (not one of your actual passwords)"
              onChange={(event) => {
                setNewPassword(event.target.value);
              }}
              required
            />
          </div>
          <br />
          <Tooltip
            placement="top"
            title="This research is being conducted in accordance with University
              security and privacy policies.
              This information is necessary in identifying demographic patterns
              in the sample response collection.
              It also provides a means of identifying participants and reaching
              out to whom it may concern."
          >
            <p>Why do we need this information?</p>
          </Tooltip>
          <div style={{ color: "#FF0000" }}>
            <b>{signUpError}</b>
          </div>
          <br />
          <Button
            disabled={false}
            className="btn"
            style={{ textTransform: "capitalize", color: "grey" }}
            onClick={signUp}
          >
            Continue
          </Button>
        </form>
      </div>
      <div className="adjacent">
        <form className="formContainer">
          <div className="formFields">
            <h4>For Existing Users</h4>
            <br />
            <TextField
              className="formInput"
              id="outlined-basic"
              label="Email"
              variant="outlined"
              error={loginEmailError}
              helperText={
                loginEmailError ? "Invalid Email" : "Please enter your MU mail"
              }
              onChange={(event) => {
                setLoginEmail(event.target.value);
              }}
              required
            />
          </div>
          <div className="formFields">
            <TextField
              className="formInput"
              id="outlined-basic"
              label="Password"
              type="password"
              variant="outlined"
              error={loginPasswordError}
              helperText={
                loginPasswordError
                  ? "Incorrect Password"
                  : "Please enter your password"
              }
              onChange={(event) => {
                setLoginPassword(event.target.value);
              }}
              required
            />
          </div>
          <br />
          <Button
            disabled={false}
            className="btn"
            style={{ textTransform: "capitalize", color: "grey" }}
            onClick={login}
          >
            Login
          </Button>
          <br />
        </form>
      </div>
    </div>
  );
}
