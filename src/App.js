import React, { useState, useEffect } from "react";
import { db } from "./firebase";
import { collection, getDocs } from "firebase/firestore";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { AccountCircle } from "@material-ui/icons";
import { Container } from "@material-ui/core";
import { Typography } from "@material-ui/core";
import { createTheme, ThemeProvider } from "@material-ui/core";
import { Location } from "react-router-dom";
import { Link } from "react-router-dom";

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
  // const [users, setUsers] = useState([]); //state to hold users, initialise as empty array
  // const userCollection = collection(db, "users"); //variable to reference user information from Firestore collection

  // useEffect(() => {
  //   const getUsers = async () => {
  //     const data = await getDocs(userCollection);
  //     setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  //     console.log("updated");
  //   };
  //   getUsers();
  // }, []);

  const read = async (id) => {
    const docRef = collection(db, "users");
    const docSnap = await getDocs(docRef);
    const data = docSnap.exists() ? docSnap.data() : null;

    if (data === null || data === undefined) return null;

    return { id, ...data };
  };

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <AppBar position="sticky">
          <Container maxWidth="xl">
            <Toolbar disableGutters>
              <Typography className="navbarUser">
                <h1>MM</h1>
              </Typography>
              <Typography className="navbarUser">
                <h2>{window.location.path}</h2>
              </Typography>
              <Typography>
                <div>{read}</div>
              </Typography>
              <AccountCircle fontSize="large" />
            </Toolbar>
          </Container>
        </AppBar>
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
          <Route path="/introduction" element={<Introduction />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
