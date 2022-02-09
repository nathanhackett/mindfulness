import React, { useState, useEffect } from "react";
//import Navbar from "./navbar";
import { db } from "./firebase";
import {
  collection,
  getDocs,
  addDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";
import "./App.css";

function App() {
  const [users, setUsers] = useState([]); //state to hold user information, initialise as empty array
  const userCollection = collection(db, "users"); //variable to reference user information from Firestore collection (not state)

  const [newName, setNewName] = useState("");
  const [newAge, setNewAge] = useState(0);
  const [newEmail, setNewEmail] = useState("");

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
      //console.log(data.docs);
    };
    getUsers(); //call function to fetch users from Firebase document
  }, [userCollection]);

  //---CRU(D)---
  const deleteUser = async (id) => {
    const userDoc = doc(db, "users", id);
    await deleteDoc(userDoc);
  };

  return (
    <div className="App">
      {/* ---(C)RUD--- */}
      <input
        placeholder="Name"
        onChange={(event) => {
          setNewName(event.target.value);
        }}
      />
      <input
        type="number"
        placeholder="Age"
        onChange={(event) => {
          setNewAge(event.target.value);
        }}
      />

      <input
        type="email"
        placeholder="Email"
        onChange={(event) => {
          setNewEmail(event.target.value);
        }}
      />
      <button onClick={createUser}>Create User</button>
      {/*needs to be an interval dropdown*/}

      {/* ---C(R)UD--- */}
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
  );
}

export default App;
