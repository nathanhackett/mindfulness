import React, { useState, useEffect } from "react";

const App = () => {
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
    <div className="Timers">
      <h2
        style={{
          fontFamily: "sans-serif",
          paddingTop: "10px",
        }}
      >
        <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
        <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}:</span>
        <span>{("0" + ((time / 10) % 100)).slice(-2)}</span>
      </h2>
    </div>
  );
};

export default App;
