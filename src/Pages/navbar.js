import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import { collection, onSnapshot } from "firebase/firestore";

import { AccountCircle } from "@material-ui/icons";

function Navbar() {
  const [profileName, setProfileName] = useState([]);
  const userCollection = collection(db, "users");

  //const [window, setWindow] = useState([]);

  useEffect(() => {
    onSnapshot(userCollection, (snapshot) =>
      setProfileName(snapshot.docs.map((doc) => doc.data()))
    );
  }, []);

  return (
    <nav className="navbar">
      {/* https://getbootstrap.com/docs/5.0/components/navbar/ */}
      <span>
        <img src="MM.png" alt="MM" height="60px" width="60px" />
      </span>
      <span className=" navbar-brand mb-0 h1">
        <div>{window.location.pathname}</div>
      </span>
      <span>
        {profileName.map((profile) => {
          return <div>{profile.name}</div>;
        })}
        <AccountCircle fontSize="large" />
      </span>
    </nav>
  );
}
export default Navbar;
