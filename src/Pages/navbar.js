import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import { collection, onSnapshot } from "firebase/firestore";
import { auth } from "../firebase";
import { onAuthStateChanged } from "firebase/auth";
import { Link } from "react-router-dom";
import { NavbarModal } from "./NavbarModal";

import { AccountCircle } from "@material-ui/icons";
import { Button } from "@mui/material";

export default function Navbar() {
  const [user, setUser] = useState({});

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

  const [profileName, setProfileName] = useState([]);
  const userCollection = collection(db, "users");

  useEffect(() => {
    onSnapshot(userCollection, (snapshot) =>
      setProfileName(snapshot.docs.map((doc) => doc.data()))
    );
  }, []);

  return (
    <nav className="navbar">
      {/* https://getbootstrap.com/docs/5.0/components/navbar/ */}
      <Link to="/">
        <img src="MM.png" alt="MM" height="60px" width="60px" />
      </Link>

      <div
        style={{
          display: "flex",
          marginTop: "5px",
        }}
      >
        {user?.email}
        {/* @TODO: Fix avatar conditional rendering */}
        {/* {window.location.pathname !== "/" && (
          <AccountCircle
            fontSize="large"
            style={{ marginTop: "-2px", marginLeft: "10px" }}
          />
        )} */}

        <button onClick={setUser}>
          <AccountCircle
            fontSize="large"
            style={{ marginTop: "-2px", marginLeft: "10px" }}
          />
        </button>
      </div>
    </nav>
  );
}
