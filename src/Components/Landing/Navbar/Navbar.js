import React, { useState } from "react";
import { Box, Typography, Menu, MenuItem, Grid, Select } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import "./Styles.css";
import { BrowserRouter as Router, Link } from "react-router-dom";

import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import AssignmentReturnOutlinedIcon from "@mui/icons-material/AssignmentReturnOutlined";
import ConfirmationNumberOutlinedIcon from "@mui/icons-material/ConfirmationNumberOutlined";

function Navbar() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [selectedOption, setSelectedOption] = useState("");
  const open = Boolean(anchorEl);

  // enable the menu while clicking the profile
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Box className="titleOne">
        <Typography sx={{ minWidth: 100 }} variant="body2">
          GET A QUOTE
        </Typography>

        <Typography
          sx={{ minWidth: 150 }}
          variant="body2"
          onClick={handleClick}>
          PROFILE{" "}
        </Typography>

        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
          style={{ zIndex: 999 }}>
          <Link to="/profile">
            <MenuItem onClick={handleClose} style={{ fontSize: "14px",color:'black' }}>
              My Profile
            </MenuItem>
          </Link>
          <Link to="/track-order">
          <MenuItem onClick={handleClose} style={{ fontSize: "14px",color:'black' }}>
            Orders
          </MenuItem>
          </Link>
          <Link to="/customer">
          <MenuItem onClick={handleClose} style={{ fontSize: "14px" ,color:'black'}}>
            Customer Service
          </MenuItem>
          </Link>
          <MenuItem onClick={handleClose} style={{ fontSize: "14px" }}>
            Logout
          </MenuItem>
        </Menu>

        <Typography sx={{ minWidth: 100 }} variant="body2">
          HELP!{" "}
        </Typography>
      </Box>

      <Box className="titleTwo">
        <Grid container>
          <Grid item xs={2}>
            <div class="logo-container">
              <Link to="/">
                <img
                  src="https://seller.seventhsq.com/static/staticfiles/img/white%20png%20(1).png"
                  alt=""
                />
              </Link>
            </div>
          </Grid>
          <Grid item xs={5}>
            <form>
              <input
                style={{
                  height: "48px",
                  width: "100%",
                  fontSize: "15px",
                  borderRadius: "5px",
                  padding: "5px",
                }}
                type="text"
                class="form-control"
                placeholder="Search Your products , brands and more"
                aria-label="Search Your Product"
                aria-describedby="button-addon2"
                name="search"

                // value={search}
                // onChange={onChange}
              />
              {/* <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
        <SearchIcon />
      </IconButton> */}
            </form>
          </Grid>

          <Grid item xs={3}>
            <Select
              style={{
                marginLeft: "10px",
                width: "90%",
                color: "white",
                cursor: "pointer",
              }}
              value={selectedOption}
              onChange={(event) => setSelectedOption(event.target.value)}
              label="Select an option">
              <MenuItem value="">None</MenuItem>
              <MenuItem value="option1">Option 1</MenuItem>
              <MenuItem value="option2">Option 2</MenuItem>
              <MenuItem value="option3">Option 3</MenuItem>
            </Select>
          </Grid>
          <Grid item xs={1}>
            <span
              style={{
                display: "flex",
                color: "white",
                marginTop: "15px",
                justifyContent: "end",
              }}>
                 <Link to="/wishlist">
                 <Typography style={{ fontSize: "16px", marginRight: "10px" }}>
                {" "}
                Wishlist
              </Typography>
                 </Link>
             
              <FavoriteBorderIcon style={{ fontSize: "20px" }} />
            </span>
          </Grid>
          <Grid item xs={1}>
            <span
              style={{
                display: "flex",
                color: "white",
                marginTop: "15px",
                justifyContent: "center",
              }}>
                 <Link to="/cart">
                 <Typography style={{ fontSize: "16px", marginRight: "10px" }}>
                {" "}
                Cart
              </Typography>
                 </Link>
             
              <ShoppingCartIcon style={{ fontSize: "20px" }} />
            </span>
          </Grid>
        </Grid>
      </Box>

      <Box className="menu">
        <Grid container style={{ justifyContent: "space-around" }}>
          <Grid item xs={2}>
            Construction Materials
          </Grid>
          <Grid item xs={2}>
            Plumbing and Electrical
          </Grid>
          <Grid item xs={1}>
            Chemicals
          </Grid>
          <Grid item xs={2}>
            Flooring and Wall
          </Grid>
          <Grid item xs={1}>
            Hardware
          </Grid>
          <Grid item xs={2}>
            Roofing and Cladding
          </Grid>
          <Grid item xs={1}>
            More
          </Grid>
          <Grid item xs={1}>
            Discover
          </Grid>
        </Grid>
      </Box>

      <Box className="delivery">
        <Grid container>
          <Grid xs={4}>
            {" "}
            <LocalShippingOutlinedIcon
              style={{ color: "orange", fontSize: "20px" }}
            />{" "}
            Delivery Within 7 Days
          </Grid>
          <Grid xs={4}>
            <AssignmentReturnOutlinedIcon
              style={{ color: "orange", fontSize: "20px" }}
            />{" "}
            Within 30 days Return Policy
          </Grid>
          <Grid xs={4}>
            {" "}
            <ConfirmationNumberOutlinedIcon
              style={{ color: "orange", fontSize: "20px" }}
            />{" "}
            Apply coupon code to avail upto 50%
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default Navbar;
