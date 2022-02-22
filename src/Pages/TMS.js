import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import { FormControl } from "@mui/material";
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

const rating = [
  {
    default: "",
  },
  {
    value: "0",
    label: "0",
  },
  {
    value: "1",
    label: "1",
  },
  {
    value: "2",
    label: "2",
  },
  {
    value: "3",
    label: "3",
  },
  {
    value: "4",
    label: "4",
  },
];

const rows = [
  {
    rate: 1,
    id: 1,
    item: "I experienced myself as separate from my changing thoughts and feelings.",
  },
  {
    rate: 2,
    id: 2,
    item: "I was more concerned with being open to my experiences than controlling or changing them.",
  },
  {
    rate: 3,
    id: 3,
    item: "I was curious about what I might learn about myself by taking notice of how I react to certain thoughts, feelings, or sensations.",
  },
  {
    rate: 4,
    id: 4,
    item: "I experienced my thoughts more as events in my mind than as a necessarily accurate reflection of the way things 'really' are.",
  },
  {
    rate: 5,
    id: 5,
    item: "I was curious to see what my mind was up to from moment to moment.",
  },
  {
    rate: 6,
    id: 6,
    item: "I was curious about each of the thoughts and feelings that I was having.",
  },
  {
    rate: 7,
    id: 7,
    item: "I was receptive to observing unpleasant thoughts and feelings without interfering with them.",
  },
  {
    rate: 8,
    id: 8,
    item: "I was more invested in just watching my experiences as they arose, than in figuring out what they could mean.",
  },
  {
    rate: 9,
    id: 9,
    item: "I approached each experience by trying to accept it, no matter whether it was pleasant or unpleasant.",
  },
  {
    rate: 10,
    id: 10,
    item: "I remained curious about the nature of each experience as it arose.",
  },
  {
    rate: 11,
    id: 11,
    item: "I was aware of my thoughts and feelings without overidentifying with them.",
  },
  {
    rate: 12,
    id: 12,
    item: "I was curious about my reactions to things.",
  },
  {
    rate: 13,
    id: 13,
    item: "I was curious about what I might learn about myself by just taking notice of what my attention gets drawn to.",
  },
];

export default function TMS() {
  const [ratings, setRatings] = useState("");

  const handleRatingChange = (event) => {
    setRatings(event.target.value);
  };

  return (
    <div className="App">
      <Link to={{ pathname: "/taskEnd" }}>
        <h1>Toronto Mindfulness Scale</h1>
      </Link>
      @TODO: Fix Rating Selection (Dropdown, Range of 0-4) @TODO: Link rating
      selection to firebase doc
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center">Rate</TableCell>
              <TableCell align="center">Item No.</TableCell>
              <TableCell align="center">Item</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.id}>
                <TableCell component="th" scope="row">
                  <FormControl
                    variant="standard"
                    style={{ width: "100%", textAlign: "center" }}
                  >
                    <TextField
                      required
                      select
                      id="outlined-basic"
                      variant="standard"
                      onChange={handleRatingChange}
                    >
                      {rating.map((rate) => (
                        <MenuItem key={rate.value} value={rate.value}>
                          {rate.label}
                        </MenuItem>
                      ))}
                    </TextField>
                  </FormControl>
                </TableCell>
                <TableCell align="right">{row.id}</TableCell>
                <TableCell align="left">{row.item}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <br />
      <Button
        component={Link}
        to={{ pathname: "/end" }}
        className="btn"
        style={{ textTransform: "capitalize", color: "grey" }}
      >
        Continue
      </Button>
    </div>
  );
}
