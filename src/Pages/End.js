import React from "react";
import { useState } from "react";
import { auth } from "../firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

export default function End() {
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
    <div className="App">
      <br />
      <h4>Thank you for your participation!</h4>
      <p>
        You have reached the end of the survey, please logout using the button
        below.
      </p>
      <br />
      {user && (
        <button className="btn" onClick={logout}>
          Logout
        </button>
      )}
    </div>
  );
}
