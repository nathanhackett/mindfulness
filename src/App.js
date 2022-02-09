import React, { useState, useEffect } from "react";
//import Navbar from "./navbar";
import { db } from "./firebase";
import { collection, getDocs } from "firebase/firestore";
import "./App.css";

function App() {
  const [users, setUsers] = useState([]); //state to hold user information, initialise as empty array
  const userCollection = collection(db, "users"); //variable to reference user information from Firestore collection (not state)

  const createUser = async () => {};

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
  }, []);

  return (
    <div className="App">
      {users.map((user) => {
        return (
          <div>
            <h1>Name: {user.name}</h1>
            <h1>Age: {user.age}</h1>
            <h1>Email: {user.email}</h1>
          </div>
        );
      })}
    </div>
  );
}

export default App;
