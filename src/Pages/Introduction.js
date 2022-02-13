import { Typography } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import LandingPage from "./LandingPage";

export default function Introduction() {
  return (
    <div>
      <Link to="/" element={<LandingPage />}>
        <Typography>
          <h1>{window.location.pathname}</h1>
        </Typography>
      </Link>
    </div>
  );
}
