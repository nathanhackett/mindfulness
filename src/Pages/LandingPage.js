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
import { TextField } from "@material-ui/core";
import { MenuItem } from "@material-ui/core";

function LandingPage() {
  const [users, setUsers] = useState([]); //state to hold users, initialise as empty array
  const userCollection = collection(db, "users"); //variable to reference user information from Firestore collection

  const [newName, setNewName] = useState(""); //state to hold user name, initialise as empty string
  const [newAge, setNewAge] = useState(""); //state to hold user age, initialise as 0
  const [newEmail, setNewEmail] = useState(""); //state to hold user email, initialise as empty string

  const [isValid, setIsValid] = useState(false);
  const [message, setMessage] = useState("");

  const emailRegex = /\S+@\S+\.\S+/;

  const validateEmail = (event) => {
    const newEmail = event.target.value;
    if (emailRegex.test(newEmail)) {
      setIsValid(true);
      setMessage("Your email looks good!");
    } else {
      setIsValid(false);
      setMessage("Please enter a valid email!");
    }
  };

  const ages = [
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
          {/* <input
              className="formInput"
              type="text"
              placeholder="Enter your full name"
              onChange={(event) => {
                setNewName(event.target.value);
              }}
            /> */}
          <TextField
            className="formInput"
            id="standard-basic"
            label="Name"
            variant="standard"
            type="text"
            helperText="Please enter your full name"
          />
        </div>

        {/* <div className="formFields">
          <label className="formLabel">
            Age
            <input
              className="formInput"
              type="number"
              placeholder="Enter your age bracket"
              // onChange={(event) => {
              //   setNewAge(event.target.value);
              // }}
            />
          </label>
        </div> */}
        <div className="formFields">
          <TextField
            className="formInput"
            select
            label="Age"
            value={newAge}
            onChange={(event) => {
              setNewAge(event.target.value);
            }}
            helperText="Please select your age bracket"
            variant="standard"
          >
            {ages.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </div>

        <div className="formFields">
          {/* <input
              className="formInput"
              type="email"
              placeholder="Enter your email"
              onChange={
                (validateEmail,
                (event) => {
                  setNewEmail(event.target.value);
                })
              }
            /> */}
          <TextField
            className="formInput"
            id="standard-basic"
            label="Email"
            variant="standard"
            type="email"
            helperText="Please enter your email"
          />
          <div className={`message ${isValid ? "success" : "error"}`}>
            {message}
          </div>
          <br />
          <p style={{ color: "grey" }}>Why do we need this information?</p>
        </div>
      </form>

      {/* <Link to="introduction" onClick={createUser}>
        Continue
      </Link> */}
      <br />
      <Link to="introduction" className="btn">
        Continue
      </Link>

      {/* ---C(R)UD--- */}
      <div className="App">
        {users.map((user) => {
          return (
            <div>
              <h1>Name: {user.name}</h1>
              <h1>Age: {user.age}</h1>
              <h1>Email: {user.email}</h1>
              {/* ---CRU(D)--- */}
              <button
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

export default LandingPage;
