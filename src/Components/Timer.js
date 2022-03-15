import React, { useState, useEffect } from "react";
import AccessAlarmsIcon from "@mui/icons-material/AccessAlarms";

const Timer = () => {
  const [time, setTime] = useState(0);
  const [timerOn, setTimerOn] = useState(false);

  useEffect(() => {
    let interval = null;
    {
      window.location.pathname === "/task1" && setTimerOn(true); //activate timer for task pages
      window.location.pathname === "/task2" && setTimerOn(true);
      window.location.pathname === "/task3" && setTimerOn(true);
      window.location.pathname === "/task4" && setTimerOn(true);
      window.location.pathname === "/task5" && setTimerOn(true);
      window.location.pathname === "/task6" && setTimerOn(true);
    }
    if (timerOn) {
      //if timer active
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10); //start timer
      }, 10);
    } else if (!timerOn) {
      //if timer is inactive
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [timerOn]);

  return (
    <div>
      <h2
        style={{
          fontFamily: "sans-serif",
          paddingTop: "10px",
        }}
      >
        <div
          style={{
            float: "left",
            marginRight: "20px",
            position: "relative",
            top: "-3px",
          }}
        >
          <AccessAlarmsIcon fontSize="large" />
        </div>
        <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
        <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}:</span>
        <span>{("0" + ((time / 10) % 100)).slice(-2)}</span>
      </h2>
    </div>
  );
};

export default Timer;
