import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import { collection, onSnapshot } from "firebase/firestore";
import { Link } from "react-router-dom";

import { AccountCircle } from "@material-ui/icons";

export default function Navbar() {
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
        {profileName.map((profile) => {
          return <div>{profile.name}</div>;
        })}
        {window.location.pathname !== "/" && (
          <AccountCircle
            fontSize="large"
            style={{ marginTop: "-2px", marginLeft: "10px" }}
          />
        )}
      </div>
    </nav>
  );
}
