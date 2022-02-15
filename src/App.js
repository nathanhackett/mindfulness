import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { createTheme, ThemeProvider } from "@material-ui/core";

import Navbar from "./Pages/navbar";
import LandingPage from "./Pages/LandingPage";
import Introduction from "./Pages/Introduction";

const theme = createTheme({
  palette: {
    primary: {
      main: "#0052cc",
    },
    secondary: {
      main: "#edf2ff",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
          <Route path="/introduction" element={<Introduction />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
