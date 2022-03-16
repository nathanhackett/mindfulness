import React from "react";
import { ImageList, FormControl, Tooltip } from "@mui/material";
import Timer from "./Timer";
import { useNavigate } from "react-router-dom";

export default function Taskbar() {
  const navigate = useNavigate();
  const handleRestart = () => {
    navigate("/introduction");
  };
  return (
    <ImageList
      cols={3}
      rowHeight={300}
      gap={20}
      justifyContent="center"
      style={{ backgroundColor: "#e8e8e8" }}
    >
      <FormControl
        variant="standard"
        style={{
          width: "100%",
          textAlign: "center",
          alignItems: "center",
        }}
      >
        {window.location.pathname === "/sampleTask" && (
          <Tooltip
            arrow
            placement="bottom"
            title="You may restart a task at any time, your responses won't be affected."
          >
            <button
              className="btn"
              style={{
                position: "relative",
                top: "15%",
                fontWeight: "bold",
              }}
              onClick={handleRestart}
            >
              Restart
            </button>
          </Tooltip>
        )}
        {window.location.pathname === "/sampleSort" && (
          <Tooltip
            placement="bottom"
            title="You may restart a task at any time, your responses won't be affected."
          >
            <button
              className="btn"
              style={{
                position: "relative",
                top: "15%",
                fontWeight: "bold",
              }}
              onClick={handleRestart}
            >
              Restart
            </button>
          </Tooltip>
        )}
      </FormControl>
      <FormControl
        variant="standard"
        style={{ width: "100%", textAlign: "center" }}
      >
        <h1
          style={{
            position: "relative",
            top: "8%",
          }}
        >
          {window.location.pathname === "/sampleTask" && "Sample Image"}
          {window.location.pathname === "/sampleSort" && "Sample Sorting Task"}
        </h1>
      </FormControl>
      <FormControl
        variant="standard"
        style={{ width: "100%", textAlign: "center", alignItems: "center" }}
      >
        <Timer />
      </FormControl>
    </ImageList>
  );
}
