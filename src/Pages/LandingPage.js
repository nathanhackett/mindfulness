import React, { useState, useEffect } from "react";
import { db } from "../firebase";
import {
  collection,
  getDocs,
  addDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import "../App.css";
import { Typography } from "@material-ui/core";

function LandingPage() {
  const [users, setUsers] = useState([]); //state to hold users, initialise as empty array
  const userCollection = collection(db, "users"); //variable to reference user information from Firestore collection

  const [newName, setNewName] = useState(""); //state to hold user name, initialise as empty string
  const [newAge, setNewAge] = useState(0); //state to hold user age, initialise as 0
  const [newEmail, setNewEmail] = useState(""); //state to hold user email, initialise as empty string

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
      <Typography>
        <h2>Mindfulness Meaure</h2>
      </Typography>
      <Typography>
        <h3>A Maynooth University Research Initiative</h3>
      </Typography>
      <br />
      <form className="formContainer">
        {/* ---(C)RUD--- */}
        <div className="innerForm">
          <TextField
            fullWidth
            variant="outlined"
            placeholder="Name"
            onChange={(event) => {
              setNewName(event.target.value);
            }}
          />
        </div>
        <div className="innerForm">
          <TextField
            fullWidth
            variant="outlined"
            type="number"
            placeholder="Age"
            onChange={(event) => {
              setNewAge(event.target.value);
            }}
          />
        </div>
        <div className="innerForm">
          <TextField
            fullWidth
            variant="outlined"
            type="email"
            placeholder="Email"
            onChange={(event) => {
              setNewEmail(event.target.value);
            }}
          />
        </div>
        <Typography>
          <h3 className="">Why do we need this information?</h3>
        </Typography>
        <Button className="buttonStyle" onClick={createUser}>
          Continue
        </Button>
        {/*needs to be an interval dropdown*/}
      </form>
      {/* ---C(R)UD--- */}
      <div className="App">
        {users.map((user) => {
          return (
            <div>
              <h1>Name: {user.name}</h1>
              <h1>Age: {user.age}</h1>
              <h1>Email: {user.email}</h1>
              {/* ---CRU(D)--- */}
              <Button
                onClick={() => {
                  deleteUser(user.id);
                }}
              >
                Delete User
              </Button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default LandingPage;
