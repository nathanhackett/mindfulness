import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { createTheme, ThemeProvider } from "@material-ui/core";

import LandingPage from "./Pages/LandingPage";
import Introduction from "./Pages/Introduction";

const theme = createTheme({
  palette: {
    primary: {
      light: "#757ce8",
      main: "#EC596B",
      dark: "#002884",
      contrastText: "#fff",
    },
    secondary: {
      light: "#ff7961",
      main: "#f44336",
      dark: "#ba000d",
      contrastText: "#000",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <nav>111</nav>
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
          <Route path="/introduction" element={<Introduction />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
