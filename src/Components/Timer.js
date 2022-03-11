// import React, { useState, useEffect } from "react";
// import { Typography } from "@mui/material";

// const Timer = () => {
//   const [seconds, setSeconds] = useState(0);
//   const [isActive, setIsActive] = useState(false);

//   function toggle() {
//     setIsActive(!isActive);
//   }

//   function reset() {
//     setSeconds(0);
//     setIsActive(false);
//   }

//   useEffect(() => {
//     let interval = null;
//     if (isActive) {
//       interval = setInterval(() => {
//         setSeconds((seconds) => seconds + 1);
//       }, 1000);
//     } else if (!isActive && seconds !== 0) {
//       clearInterval(interval);
//     }
//     return () => clearInterval(interval);
//   }, [isActive, seconds]);

//   return (
//     <div>
//       <div className="time">
//         <h1 style={{ fontFamily: "sans-serif" }}>{seconds}s</h1>
//       </div>
//       {/* <div className="row">
//         <button
//           className={`btn-${isActive ? "active" : "inactive"}`}
//           onClick={toggle}
//         >
//           {isActive ? "Pause" : "Start"}
//         </button>
//         <button className="btn" onClick={reset}>
//           Reset
//         </button>
//       </div> */}
//     </div>
//   );
// };

// export default Timer;

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

      {/* <div id="buttons">
        {!timerOn && time === 0 && (
          <button onClick={() => setTimerOn(true)}>Start</button>
        )}
        {timerOn && <button onClick={() => setTimerOn(false)}>Stop</button>}
        {!timerOn && time > 0 && (
          <button onClick={() => setTime(0)}>Reset</button>
        )}
        {!timerOn && time > 0 && (
          <button onClick={() => setTimerOn(true)}>Resume</button>
        )}
      </div> */}
    </div>
  );
};

export default App;
