import React, { useState, useEffect } from "react";
import { db } from "./firebase";
import { collection, getDocs } from "firebase/firestore";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./Pages/LandingPage";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { AccountCircle } from "@material-ui/icons";
import { Container } from "@material-ui/core";
import { Typography } from "@material-ui/core";
import { createTheme, ThemeProvider } from "@material-ui/core";

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
  const [users, setUsers] = useState([]); //state to hold users, initialise as empty array
  const userCollection = collection(db, "users"); //variable to reference user information from Firestore collection

  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(userCollection);
      setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      console.log("updated");
    };
    getUsers();
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <AppBar>
          <Container maxWidth="xl">
            <Toolbar disableGutters>
              <Typography className="navbarUser">
                <h1>MM</h1>
              </Typography>
              <Typography>
                {users.map((user) => {
                  return (
                    <div>
                      <h2>Name: {user.name}</h2>
                    </div>
                  );
                })}
              </Typography>
              <AccountCircle fontSize="large" />
            </Toolbar>
          </Container>
        </AppBar>
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
