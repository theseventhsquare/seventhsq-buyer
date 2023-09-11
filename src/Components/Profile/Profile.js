import React from "react";
import { Grid, Paper, Typography, Box, TextField, Button } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LogoutIcon from "@mui/icons-material/Logout";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import { BrowserRouter as Router, Link } from "react-router-dom";

function Profile() {
  return (
    <>
      <Grid container spacing={2} p={3}>
        <Grid item xs={3}>
          <Paper elevation={3} style={{ padding: "10px" }}>
            <ul>
              <li>
                {" "}
                <Link to="/profile">
                  <span style={{ color: "orange" }}>
                    <AccountCircleIcon /> PROFILE
                  </span>{" "}
                </Link>
              </li>{" "}
              <br />
              <li>
                <Link to="/track-order">
                  <span style={{ color: "black" }}>
                    <LocalShippingIcon /> ORDERS
                  </span>
                </Link>
              </li>
              <br />
              <li>
              <Link to="/customer">
                <span style={{ color: "black" }}>
                  <SupportAgentIcon /> CUSTOMER SERVICE
                </span>
                </Link>
              </li>
              <br />
              <li>
                <span>
                  <LogoutIcon /> LOGOUT
                </span>
              </li>
            </ul>
          </Paper>
        </Grid>
        <Grid item xs={9}>
          <Paper elevation={3} style={{ padding: "10px" }}>
            <div style={{ padding: "20px" }}>
              <Typography variant="h6" gutterBottom style={{ color: "orange" }}>
                My Profile
              </Typography>

              <Box component="form">
                <div>
                  <label>Name</label>
                  <TextField
                    id="outlined-number"
                    type="name"
                    size="small"
                    fullWidth
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
                </div>
                <div style={{ marginTop: "10px" }}>
                  <label>Last Name</label>
                  <TextField
                    id="outlined-number"
                    type="name"
                    size="small"
                    fullWidth
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
                </div>

                <div style={{ marginTop: "10px" }}>
                  <label>Email</label>
                  <TextField
                    id="outlined-number"
                    type="name"
                    size="small"
                    fullWidth
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
                </div>

                <div style={{ marginTop: "10px" }}>
                  <label>Number</label>
                  <TextField
                    id="outlined-number"
                    type="name"
                    size="small"
                    fullWidth
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
                </div>

                <div style={{ marginTop: "10px" }}>
                  <label>Password</label>
                  <TextField
                    id="outlined-number"
                    type="name"
                    size="small"
                    fullWidth
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
                </div>

                <div style={{ marginTop: "10px" }}>
                  <label>Address</label>
                  <TextField
                    id="outlined-number"
                    type="name"
                    size="small"
                    fullWidth
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
                </div>

                <div
                  style={{
                    marginTop: "50px",
                    justifyContent: "space-between",
                  }}>
                  <Button
                    style={{
                      background: "#FE9329",
                      color: "white",
                      width: "50%",
                    }}>
                    Save
                  </Button>
                  <Button
                    style={{
                      background: "#FE9329",
                      color: "white",
                      width: "49%",
                      marginLeft: "10px",
                    }}>
                    Edit
                  </Button>
                </div>
              </Box>
            </div>
          </Paper>
        </Grid>
      </Grid>
    </>
  );
}

export default Profile;
