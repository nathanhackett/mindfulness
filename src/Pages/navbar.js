import React, { useState } from "react";
import { auth, db } from "../firebase";
import { doc, getDoc } from "firebase/firestore";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";

import { AccountCircle } from "@material-ui/icons";
import { Button } from "@mui/material";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";

import Timer from "../Components/Timer";
import { FormControl } from "@mui/material";

const style = {
  position: "absolute",
  top: "30%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 10,
  borderRadius: 2,
  p: 4,
  textAlign: "center",
};

export default function Navbar() {
  //modal
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  //auth
  const [user, setUser] = useState({});
  const navigate = useNavigate();

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

  const logout = async () => {
    await signOut(auth);
    navigate("/");
    handleClose();
  };

  //fetch name from firestore

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
        {window.location.pathname !== "/" && (
          <Button className="btn-modal" onClick={handleOpen}>
            <AccountCircle
              fontSize="large"
              style={{ marginTop: "-2px", color: "white" }}
            />
          </Button>
        )}
        <Modal open={open} onClose={handleClose}>
          <Box sx={style}>
            <h4>{user?.email}</h4>
            <br />
            <div>
              <Button
                className="btn"
                style={{ textTransform: "capitalize" }}
                onClick={logout}
              >
                Logout
              </Button>
            </div>
          </Box>
        </Modal>
      </div>
    </nav>
  );
}
