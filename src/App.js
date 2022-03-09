import React from "react";
import { useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material";
import { auth } from "./firebase";

import Navbar from "./Pages/Navbar";
import LandingPage from "./Pages/LandingPage";
import Introduction from "./Pages/Introduction";
import SampleTask from "./Pages/SampleTask";
import SampleSorting from "./Pages/SampleSorting";
import TutorialEnd from "./Pages/TutorialEnd";
import Task1 from "./Pages/Task1";
import Task2 from "./Pages/Task2";
import Task3 from "./Pages/Task3";
import Task4 from "./Pages/Task4";
import Task5 from "./Pages/Task5";
import Task6Sorting from "./Pages/Task6Sorting";
import EndTasks from "./Pages/EndTasks";
import TMS from "./Pages/TMS";
import End from "./Pages/End";

const theme = createTheme({
  palette: {
    primary: {
      main: "#78b8c2",
    },
    secondary: {
      main: "#edf2ff",
    },
  },
});

export default function App() {
  const [user, setUser] = useState({});

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Navbar />
        <Routes>
          {!user && (
            <Route
              exact
              path="/"
              element={<LandingPage auth={() => setUser(true)} />}
            />
          )}
          {user && (
            <Route
              path="/introduction"
              element={<Introduction auth={() => setUser(false)} />}
            />
          )}

          <Route path="/sampleTask" element={<SampleTask />} />
          <Route path="/sampleSort" element={<SampleSorting />} />
          <Route path="/tutorialEnd" element={<TutorialEnd />} />
          <Route path="/task1" element={<Task1 />} />
          <Route path="/task2" element={<Task2 />} />
          <Route path="/task3" element={<Task3 />} />
          <Route path="/task4" element={<Task4 />} />
          <Route path="/task5" element={<Task5 />} />
          <Route path="/task6" element={<Task6Sorting />} />
          <Route path="/taskEnd" element={<EndTasks />} />
          <Route path="/tms" element={<TMS />} />
          <Route path="/end" element={<End />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}
