import React, { useState } from "react";
import { auth } from "../firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import { NavbarModal } from "./NavbarModal";

import { AccountCircle } from "@material-ui/icons";
import { Button } from "@mui/material";

export default function Navbar() {
  const [user, setUser] = useState({});
  const navigate = useNavigate();

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

  const logout = async () => {
    await signOut(auth);
    navigate("/");
  };

  return (
    <nav className="navbar">
      {/* https://getbootstrap.com/docs/5.0/components/navbar/ */}
      <Link to="/" onClick={logout}>
        <img src="MM.png" alt="MM" height="60px" width="60px" />
      </Link>

      <div
        style={{
          display: "flex",
          marginTop: "5px",
        }}
      >
        {user?.email}
        {user && (
          <Button
            style={{ color: "white", textTransform: "capitalize" }}
            onClick={logout}
          >
            Logout
          </Button>
        )}
        {window.location.pathname !== "/" && (
          <Button className="btn-modal">
            <AccountCircle
              fontSize="large"
              style={{ marginTop: "-2px", color: "white" }}
            />
          </Button>
        )}
      </div>
    </nav>
  );
}
