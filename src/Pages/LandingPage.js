//backend imports
import React, { useState, useEffect } from "react";
import { db } from "../firebase";
import {
  collection,
  getDocs,
  addDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { Link } from "react-router-dom";
//frontend imports
import "../App.css";
import { TextField } from "@mui/material";
import { MenuItem } from "@material-ui/core";
import { Button } from "@mui/material";

export default function LandingPage() {
  const [users, setUsers] = useState([]); //state to hold users, initialise as empty array
  const userCollection = collection(db, "users"); //variable to reference Firestore collection

  const [newName, setNewName] = useState(""); //state to hold user name, initialise as empty string
  const [newAge, setNewAge] = useState(""); //state to hold user age, initialise as 0
  const [newEmail, setNewEmail] = useState(""); //state to hold user email, initialise as empty string

  const [errors, setErrors] = useState("");

  const handleNameChange = (event) => {
    const {
      target: { value },
    } = event;
    setErrors({ newName: "" });
    setNewName(value);

    let nameReg = new RegExp(/^([^0-9]*)$/).test(value);
    if (!nameReg) {
      setErrors({ newName: "Invalid name" });
    }
  };

  const handleEmailChange = (event) => {
    const {
      target: { value },
    } = event;
    setErrors({ newEmail: "" });
    setNewEmail(value);

    let emailReg = new RegExp(
      /^(([^<>()\]\\.,;:\s@"]+(\.[^<>()\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    ).test(value);
    if (!emailReg) {
      setErrors({ newEmail: "Invalid email format" });
    }
  };

  const buttonDisable = () => {
    //if error.name = false && error.email = false, return false, else return true
    //or
    //if all fields = !empty, then false
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

  //---(C)RUD---
  const createUser = async () => {
    await addDoc(userCollection, {
      name: newName,
      age: newAge,
      email: newEmail,
    });
  };

  //---C(R)UD---
  useEffect(() => {
    //triggers every time component is rendered
    const getUsers = async () => {
      //async/await function to request from Firebase
      //returns promise (i.e. the data in the document in its raw form)
      //cannot make useEffect async, use async inside hook
      const data = await getDocs(userCollection); //get collection using reference
      setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))); //append fetched information to users array
      console.log("updated");
    };
    getUsers(); //call function to fetch users from Firebase document
  }, []); //***fix rerendering

  //---CRU(D)---
  const deleteUser = async (id) => {
    const userDoc = doc(db, "users", id);
    await deleteDoc(userDoc);
  };

  return (
    <div className="App">
      <h1>Mindfulness Meaure</h1>
      <br />
      <h4>A Maynooth University Research Initiative</h4>
      <br />
      <form className="formContainer">
        {/* ---(C)RUD--- */}
        <div className="formFields">
          <TextField
            className="formInput"
            id="outlined-basic"
            label="Name"
            variant="outlined"
            value={newName}
            error={Boolean(errors?.newName)}
            helperText={
              errors?.newName !== true && "Please enter your Full name"
            }
            onChange={handleNameChange}
            required
          />
        </div>
        <div className="formFields">
          <TextField
            className="formInput"
            required
            select
            id="outlined-basic"
            label="Age"
            variant="outlined"
            helperText="Please select your age bracket"
            onChange={(event) => {
              setNewAge(event.target.value);
            }}
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
            value={newEmail}
            error={Boolean(errors?.newEmail)}
            helperText={
              errors?.newEmail !== true && "Please enter your MU mail"
            }
            onChange={handleEmailChange}
            required
          />
          <br />
          <br />
        </div>
        {/* @TODO: Fix Helper text */}
        <div className="helpBubble">
          <p className="speechHover" style={{ color: "grey" }}>
            Why do we need this information?
          </p>
          <div className="speechBubble">
            This research is being conducted in accordance with University
            security and privacy policies. <br />
            This information is necessary in identifying demographic patterns in
            the sample response collection. <br />
            It also provides a means of identifying participants and reaching
            out to whom it may concern.
          </div>
        </div>
      </form>
      <br />

      <Button
        component={Link}
        to="introduction"
        disabled={false}
        className="btn"
        style={{ textTransform: "capitalize", color: "grey" }}
      >
        Continue
      </Button>

      {/* ---C(R)UD--- */}
      <div className="App">
        {users.map((user) => {
          return (
            <div>
              <h3>Name: {user.name}</h3>
              <h3>Age: {user.age}</h3>
              <h3>Email: {user.email}</h3>
              {/* ---CRU(D)--- */}
              <button
                className="btn"
                onClick={() => {
                  deleteUser(user.id);
                }}
              >
                Delete User
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
