import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";

export default function TMS() {
  return (
    <div className="App">
      <Link to={{ pathname: "/taskEnd" }}>
        <h1>{window.location.pathname}</h1>
      </Link>{" "}
      <Button
        component={Link}
        to={{ pathname: "/end" }}
        className="btn"
        style={{ textTransform: "capitalize", color: "grey" }}
      >
        Continue
      </Button>
    </div>
  );
}
