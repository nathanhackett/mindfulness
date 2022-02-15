import React from "react";
import { Link } from "react-router-dom";
import LandingPage from "./LandingPage";

export default function Introduction() {
  return (
    <div>
      <Link to="/" element={<LandingPage />}>
        <h1>{window.location.pathname}</h1>
      </Link>
    </div>
  );
}
