import React from "react";
import { Button } from "@mui/material";
import { FormControl, ImageList } from "@mui/material";
import { MenuItem } from "@mui/material";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { useState } from "react";
import { TextField } from "@mui/material";
import { db, auth } from "../firebase";
import { doc, updateDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

const rating = [
  {
    default: "",
  },
  {
    value: 0,
    label: "0",
  },
  {
    value: 1,
    label: "1",
  },
  {
    value: 2,
    label: "2",
  },
  {
    value: 3,
    label: "3",
  },
  {
    value: 4,
    label: "4",
  },
];

const legend = [
  {
    id: 0,
    value: 0,
    description: "Not at All",
  },
  {
    id: 1,
    value: 1,
    description: "A Little",
  },
  {
    id: 2,
    value: 2,
    description: "Moderately",
  },
  {
    id: 3,
    value: 3,
    description: "Quite a Bit",
  },
  {
    id: 4,
    value: 4,
    description: "Very Much",
  },
];

export default function TMS() {
  const [item1, setItem1] = useState(0);
  const [item2, setItem2] = useState(0);
  const [item3, setItem3] = useState(0);
  const [item4, setItem4] = useState(0);
  const [item5, setItem5] = useState(0);
  const [item6, setItem6] = useState(0);
  const [item7, setItem7] = useState(0);
  const [item8, setItem8] = useState(0);
  const [item9, setItem9] = useState(0);
  const [item10, setItem10] = useState(0);
  const [item11, setItem11] = useState(0);
  const [item12, setItem12] = useState(0);
  const [item13, setItem13] = useState(0);

  const navigate = useNavigate();

  const handleRating = () => {
    const user = auth.currentUser;
    if (user !== null) {
      const uid = user.uid;
      updateDoc(doc(db, "users", uid), {
        tms1: item1,
        tms2: item2,
        tms3: item3,
        tms4: item4,
        tms5: item5,
        tms6: item6,
        tms7: item7,
        tms8: item8,
        tms9: item9,
        tms10: item10,
        tms11: item11,
        tms12: item12,
        tms13: item13,
      });
      navigate("/end");
    }
  };

  const clearChoices = () => {
    setItem1(0);
    setItem2(0);
    setItem3(0);
    setItem4(0);
    setItem5(0);
    setItem6(0);
    setItem7(0);
    setItem8(0);
    setItem9(0);
    setItem10(0);
    setItem11(0);
    setItem12(0);
    setItem13(0);
  };

  return (
    <div className="App">
      <h1>Toronto Mindfulness Scale</h1>
      <br />

      <ImageList
        cols={4}
        rowHeight={300}
        gap={20}
        justifyContent="center"
        style={{ padding: "20px" }}
      >
        <div></div>
        <div>
          We are interested in what you just experienced. Below is a list of
          things that people sometimes experience. Please read each statement.
          Please indicate the extent to which you agree with each statement. In
          other words,{" "}
          <b>
            how well does the statement describe what you just experienced, just
            now?
          </b>
        </div>
        <TableContainer component={Paper}>
          <Table aria-label="simple table">
            <TableHead>
              {legend.map((rating) => (
                <TableRow>
                  <TableCell
                    align="center"
                    width={120}
                    style={{ backgroundColor: "#e8e8e8", fontWeight: "bold" }}
                  >
                    {rating.id}
                  </TableCell>
                  <TableCell
                    align="left"
                    width={120}
                    style={{ fontWeight: "bold" }}
                  >
                    {rating.description}
                  </TableCell>
                </TableRow>
              ))}
            </TableHead>
          </Table>
        </TableContainer>
      </ImageList>
      <br />
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead style={{ backgroundColor: "#e8e8e8" }}>
            <TableRow>
              <TableCell
                align="center"
                width={120}
                style={{ fontWeight: "bold" }}
              >
                Rate 0-4
              </TableCell>
              <TableCell
                align="center"
                width={90}
                style={{ fontWeight: "bold" }}
              >
                Item No.
              </TableCell>
              <TableCell align="left" style={{ fontWeight: "bold" }}>
                Item
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell component="th" scope="row">
                <FormControl
                  variant="standard"
                  style={{
                    width: "100%",
                    textAlign: "center",
                    backgroundColor: "#e6e6e6",
                  }}
                >
                  <TextField
                    required
                    select
                    id="outlined-basic"
                    variant="standard"
                    value={item1}
                    onChange={(event) => {
                      setItem1(event.target.value);
                    }}
                  >
                    {rating.map((rate) => (
                      <MenuItem key={rate.value} value={rate.value}>
                        {rate.label}
                      </MenuItem>
                    ))}
                  </TextField>
                </FormControl>
              </TableCell>
              <TableCell align="center">1</TableCell>
              <TableCell align="left">
                I experienced myself as separate from my changing thoughts and
                feelings.
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell component="th" scope="row">
                <FormControl
                  variant="standard"
                  style={{
                    width: "100%",
                    textAlign: "center",
                    backgroundColor: "#e6e6e6",
                  }}
                >
                  <TextField
                    required
                    select
                    id="outlined-basic"
                    variant="standard"
                    value={item2}
                    onChange={(event) => {
                      setItem2(event.target.value);
                    }}
                  >
                    {rating.map((rate) => (
                      <MenuItem key={rate.value} value={rate.value}>
                        {rate.label}
                      </MenuItem>
                    ))}
                  </TextField>
                </FormControl>
              </TableCell>
              <TableCell align="center">2</TableCell>
              <TableCell align="left">
                I was more concerned with being open to my experiences than
                controlling or changing them.
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell component="th" scope="row">
                <FormControl
                  variant="standard"
                  style={{
                    width: "100%",
                    textAlign: "center",
                    backgroundColor: "#e6e6e6",
                  }}
                >
                  <TextField
                    required
                    select
                    id="outlined-basic"
                    variant="standard"
                    value={item3}
                    onChange={(event) => {
                      setItem3(event.target.value);
                    }}
                  >
                    {rating.map((rate) => (
                      <MenuItem key={rate.value} value={rate.value}>
                        {rate.label}
                      </MenuItem>
                    ))}
                  </TextField>
                </FormControl>
              </TableCell>
              <TableCell align="center">3</TableCell>
              <TableCell align="left">
                I was curious about what I might learn about myself by taking
                notice of how I react to certain thoughts, feelings, or
                sensations.
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell component="th" scope="row">
                <FormControl
                  variant="standard"
                  style={{
                    width: "100%",
                    textAlign: "center",
                    backgroundColor: "#e6e6e6",
                  }}
                >
                  <TextField
                    required
                    select
                    id="outlined-basic"
                    variant="standard"
                    value={item4}
                    onChange={(event) => {
                      setItem4(event.target.value);
                    }}
                  >
                    {rating.map((rate) => (
                      <MenuItem key={rate.value} value={rate.value}>
                        {rate.label}
                      </MenuItem>
                    ))}
                  </TextField>
                </FormControl>
              </TableCell>
              <TableCell align="center">4</TableCell>
              <TableCell align="left">
                I experienced my thoughts more as events in my mind than as a
                necessarily accurate reflection of the way things 'really' are.
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell component="th" scope="row">
                <FormControl
                  variant="standard"
                  style={{
                    width: "100%",
                    textAlign: "center",
                    backgroundColor: "#e6e6e6",
                  }}
                >
                  <TextField
                    required
                    select
                    id="outlined-basic"
                    variant="standard"
                    value={item5}
                    onChange={(event) => {
                      setItem5(event.target.value);
                    }}
                  >
                    {rating.map((rate) => (
                      <MenuItem key={rate.value} value={rate.value}>
                        {rate.label}
                      </MenuItem>
                    ))}
                  </TextField>
                </FormControl>
              </TableCell>
              <TableCell align="center">5</TableCell>
              <TableCell align="left">
                I was curious to see what my mind was up to from moment to
                moment.
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell component="th" scope="row">
                <FormControl
                  variant="standard"
                  style={{
                    width: "100%",
                    textAlign: "center",
                    backgroundColor: "#e6e6e6",
                  }}
                >
                  <TextField
                    required
                    select
                    id="outlined-basic"
                    variant="standard"
                    value={item6}
                    onChange={(event) => {
                      setItem6(event.target.value);
                    }}
                  >
                    {rating.map((rate) => (
                      <MenuItem key={rate.value} value={rate.value}>
                        {rate.label}
                      </MenuItem>
                    ))}
                  </TextField>
                </FormControl>
              </TableCell>
              <TableCell align="center">6</TableCell>
              <TableCell align="left">
                I was curious about each of the thoughts and feelings that I was
                having.
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell component="th" scope="row">
                <FormControl
                  variant="standard"
                  style={{
                    width: "100%",
                    textAlign: "center",
                    backgroundColor: "#e6e6e6",
                  }}
                >
                  <TextField
                    required
                    select
                    id="outlined-basic"
                    variant="standard"
                    value={item7}
                    onChange={(event) => {
                      setItem7(event.target.value);
                    }}
                  >
                    {rating.map((rate) => (
                      <MenuItem key={rate.value} value={rate.value}>
                        {rate.label}
                      </MenuItem>
                    ))}
                  </TextField>
                </FormControl>
              </TableCell>
              <TableCell align="center">7</TableCell>
              <TableCell align="left">
                I was receptive to observing unpleasant thoughts and feelings
                without interfering with them.
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell component="th" scope="row">
                <FormControl
                  variant="standard"
                  style={{
                    width: "100%",
                    textAlign: "center",
                    backgroundColor: "#e6e6e6",
                  }}
                >
                  <TextField
                    required
                    select
                    id="outlined-basic"
                    variant="standard"
                    value={item8}
                    onChange={(event) => {
                      setItem8(event.target.value);
                    }}
                  >
                    {rating.map((rate) => (
                      <MenuItem key={rate.value} value={rate.value}>
                        {rate.label}
                      </MenuItem>
                    ))}
                  </TextField>
                </FormControl>
              </TableCell>
              <TableCell align="center">8</TableCell>
              <TableCell align="left">
                I was more invested in just watching my experiences as they
                arose, than in figuring out what they could mean..
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell component="th" scope="row">
                <FormControl
                  variant="standard"
                  style={{
                    width: "100%",
                    textAlign: "center",
                    backgroundColor: "#e6e6e6",
                  }}
                >
                  <TextField
                    required
                    select
                    id="outlined-basic"
                    variant="standard"
                    value={item9}
                    onChange={(event) => {
                      setItem9(event.target.value);
                    }}
                  >
                    {rating.map((rate) => (
                      <MenuItem key={rate.value} value={rate.value}>
                        {rate.label}
                      </MenuItem>
                    ))}
                  </TextField>
                </FormControl>
              </TableCell>
              <TableCell align="center">9</TableCell>
              <TableCell align="left">
                I approached each experience by trying to accept it, no matter
                whether it was pleasant or unpleasant.
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell component="th" scope="row">
                <FormControl
                  variant="standard"
                  style={{
                    width: "100%",
                    textAlign: "center",
                    backgroundColor: "#e6e6e6",
                  }}
                >
                  <TextField
                    required
                    select
                    id="outlined-basic"
                    variant="standard"
                    value={item10}
                    onChange={(event) => {
                      setItem10(event.target.value);
                    }}
                  >
                    {rating.map((rate) => (
                      <MenuItem key={rate.value} value={rate.value}>
                        {rate.label}
                      </MenuItem>
                    ))}
                  </TextField>
                </FormControl>
              </TableCell>
              <TableCell align="center">10</TableCell>
              <TableCell align="left">
                I remained curious about the nature of each experience as it
                arose.
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell component="th" scope="row">
                <FormControl
                  variant="standard"
                  style={{
                    width: "100%",
                    textAlign: "center",
                    backgroundColor: "#e6e6e6",
                  }}
                >
                  <TextField
                    required
                    select
                    id="outlined-basic"
                    variant="standard"
                    value={item11}
                    onChange={(event) => {
                      setItem11(event.target.value);
                    }}
                  >
                    {rating.map((rate) => (
                      <MenuItem key={rate.value} value={rate.value}>
                        {rate.label}
                      </MenuItem>
                    ))}
                  </TextField>
                </FormControl>
              </TableCell>
              <TableCell align="center">11</TableCell>
              <TableCell align="left">
                I was aware of my thoughts and feelings without overidentifying
                with them.
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell component="th" scope="row">
                <FormControl
                  variant="standard"
                  style={{
                    width: "100%",
                    textAlign: "center",
                    backgroundColor: "#e6e6e6",
                  }}
                >
                  <TextField
                    required
                    select
                    id="outlined-basic"
                    variant="standard"
                    value={item12}
                    onChange={(event) => {
                      setItem12(event.target.value);
                    }}
                  >
                    {rating.map((rate) => (
                      <MenuItem key={rate.value} value={rate.value}>
                        {rate.label}
                      </MenuItem>
                    ))}
                  </TextField>
                </FormControl>
              </TableCell>
              <TableCell align="center">12</TableCell>
              <TableCell align="left">
                I was curious about my reactions to things.
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell component="th" scope="row">
                <FormControl
                  variant="standard"
                  style={{
                    width: "100%",
                    textAlign: "center",
                    backgroundColor: "#e6e6e6",
                  }}
                >
                  <TextField
                    required
                    select
                    id="outlined-basic"
                    variant="standard"
                    value={item13}
                    onChange={(event) => {
                      setItem13(event.target.value);
                    }}
                  >
                    {rating.map((rate) => (
                      <MenuItem key={rate.value} value={rate.value}>
                        {rate.label}
                      </MenuItem>
                    ))}
                  </TextField>
                </FormControl>
              </TableCell>
              <TableCell align="center">13</TableCell>
              <TableCell align="left">
                I was curious about what I might learn about myself by just
                taking notice of what my attention gets drawn to.
              </TableCell>
            </TableRow>
            <TableRow>
              <Button
                style={{ textTransform: "capitalize", color: "grey" }}
                onClick={clearChoices}
              >
                Clear Choices
              </Button>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
      <br />
      <Button
        className="btn"
        style={{ textTransform: "capitalize", color: "grey" }}
        onClick={handleRating}
      >
        Continue
      </Button>
    </div>
  );
}
