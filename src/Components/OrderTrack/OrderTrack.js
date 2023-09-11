import React from "react";
import {
  Grid,
  Paper,
  Typography,
  FormControl,
  TextField,
  InputAdornment,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LogoutIcon from "@mui/icons-material/Logout";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import SearchIcon from "@mui/icons-material/Search";
import { BrowserRouter as Router, Link } from "react-router-dom";
import orders from "../../images/Orders.png"

function OrderTrack() {
  const [age, setAge] = React.useState("");
  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
   
      <>
        <Grid container spacing={2} p={3}>
          <Grid item xs={3}>
            <Paper elevation={3} style={{ padding: "10px" }}>
              <ul>
                <li>
                  {" "}
                  <Link to="/profile">
                    <span style={{ color: "black" }}>
                      <AccountCircleIcon /> PROFILE
                    </span>{" "}
                  </Link>
                </li>{" "}
                <br />
                <li>
                  <Link to="/track-order">
                    <span style={{ color: "orange" }}>
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
            <Paper elevation={3} style={{ padding: "10px" , height:'600px'}}>
              <div style={{ padding: "20px" }}>
                <Typography
                  variant="h6"
                  gutterBottom
                  style={{ color: "orange" }}>
                  Order
                </Typography>
                <div>
                  <TextField
                    size="small"
                    fullWidth
                    variant="outlined"
                    placeholder="Search"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <SearchIcon />
                        </InputAdornment>
                      ),
                    }}
                  />
                </div>
                <div>
                  <span
                    style={{ float: "right", width: "250px", padding: "10px" }}>
                    <FormControl fullWidth>
                      <InputLabel id="demo-simple-select-label">
                        Sort by
                      </InputLabel>

                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={age}
                        label="Age"
                        size="small"
                        onChange={handleChange}>
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                      </Select>
                    </FormControl>
                  </span>
                </div>

                <div>
                  <img src={orders} style={{width:'100%'}}/>
                </div>
              </div>
            </Paper>
          </Grid>
        </Grid>
      </>
    
  );
}

export default OrderTrack;
