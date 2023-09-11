import React from "react";
import {
  Grid,
  Paper,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
  Card,
  CardContent
} from "@mui/material";
import { BrowserRouter as Router, Link } from "react-router-dom";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LogoutIcon from "@mui/icons-material/Logout";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import wishlist from "../../images/whislist.png"

function Customer() {
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
                  <span style={{ color: "black" }}>
                    <LocalShippingIcon /> ORDERS
                  </span>
                </Link>
              </li>
              <br />
              <li>
                <Link to="/customer">
                  <span style={{ color: "orange" }}>
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
          <Paper elevation={3} style={{ padding: "10px", height: "600px" }}>
            <div style={{ padding: "20px" }}>
              <Typography variant="h6" gutterBottom style={{ color: "orange" }}>
                Customer Service
              </Typography>
              <div>
                <span>
                  <Button style={{ background: "#FF7F00", color: "white" }}>
                    Create New Ticket
                  </Button>
                </span>
                <span style={{ float: "right", width: "250px" }}>
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
              <Card sx={{ minWidth: 275 , marginTop:'30px'}}>
        <CardContent>

        <Grid container spacing={2}>
  <Grid item xs={10}>
  <Typography variant="subtitle2" gutterBottom>
     <span style={{color:'green'}}>Ticket Closed </span> <span style={{color:'grey'}}>Ticket ID #0286454674849</span>
      </Typography>
       <Typography variant="button" display="block" gutterBottom>
       Damaged product
      </Typography>
      <Typography variant="body2" gutterBottom>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </Typography>
  </Grid>
  <Grid item xs={2}>
    <img src={wishlist}/>
  </Grid>
 
</Grid>

       
        </CardContent>
      </Card>
      <Card sx={{ minWidth: 275 , marginTop:'30px'}}>
        <CardContent>

        <Grid container spacing={2}>
  <Grid item xs={10}>
  <Typography variant="subtitle2" gutterBottom>
     <span style={{color:'green'}}>Ticket Closed </span> <span style={{color:'grey'}}>Ticket ID #0286454674849</span>
      </Typography>
       <Typography variant="button" display="block" gutterBottom>
       Damaged product
      </Typography>
      <Typography variant="body2" gutterBottom>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </Typography>
  </Grid>
  <Grid item xs={2}>
    <img src={wishlist}/>
  </Grid>
 
</Grid>

       
        </CardContent>
      </Card>
            </div>
          </Paper>
        </Grid>
      </Grid>

    
    </>
  );
}

export default Customer;
