import React from "react";
import {
  Breadcrumbs,
  Link,
  Typography,
  Grid,
  Box,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  CardActions,
  Button,
  FormControl,
  Select,
  MenuItem,
  InputLabel,
} from "@mui/material";
import brick from "../../../../../images/brick.png";
import BricksFilter from "./BricksFilter";

function Bricks() {
  const [age, setAge] = React.useState("");
  function handleClick(event) {
    event.preventDefault();
    console.info("You clicked a breadcrumb.");
  }

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <>
      <div
        role="presentation"
        onClick={handleClick}
        style={{ padding: "10px" }}>
        <Breadcrumbs aria-label="breadcrumb">
          <Link underline="hover" color="inherit" href="/">
            MUI
          </Link>
          <Link
            underline="hover"
            color="inherit"
            href="/material-ui/getting-started/installation/">
            Core
          </Link>
          <Typography color="text.primary">Breadcrumbs</Typography>
        </Breadcrumbs>
      </div>

      <div style={{ padding: "10px" }}>
        <Typography variant="body2" gutterBottom>
          <span style={{ color: "orange", fontSize: "20px" }}>
            {" "}
            Sanitaryware{" "}
          </span>
          (Showing 1 to 12 products of 295 Products)
        </Typography>
      </div>

      <Grid
        container-fluid
        style={{
          width: "100%",
          height: "35px",
          background: "#4C5864",
          padding: "5px",
        }}>
        <ul
          style={{
            display: "flex",
            justifyContent: "space-between",
            color: "white",
          }}>
          <li>Faucet</li>
          <li>Shower</li>
          <li>Sink</li>
          <li>Washbasin </li>
          <li>Water Closet & Bidet</li>
          <li>Bath Tub</li>
          <li>Urinal</li>
          <li>Flush Cistern & Flush Tank</li>
          <li>Fittings & Allied Products</li>
        </ul>
      </Grid>

      <div>
        <span style={{ float: "right", width:'250px' , padding:"10px"}}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Sort by</InputLabel>

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

      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={3}>
            <BricksFilter />
          </Grid>
          <Grid item xs={9}>
            <Grid container spacing={2}>
              <Grid item xs={3}>
                <Card>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      style={{ height: "120px" }}
                      image={brick}
                      alt="green iguana"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h6" component="div">
                        Red Clay Brick
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        <span>₹3,499</span>{" "}
                        <span style={{ textDecoration: "line-through" }}>
                          {" "}
                          ₹8,999
                        </span>{" "}
                        <span style={{ color: "orange" }}> 61% off</span>
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions style={{ justifyContent: "center" }}>
                    <Button
                      size="small"
                      variant="contained"
                      width="100%"
                      style={{ background: "#FF7F00" }}>
                      ADD TO CART
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
              <Grid item xs={3}>
                <Card>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      style={{ height: "120px" }}
                      image={brick}
                      alt="green iguana"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h6" component="div">
                        Red Clay Brick
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        <span>₹3,499</span>{" "}
                        <span style={{ textDecoration: "line-through" }}>
                          {" "}
                          ₹8,999
                        </span>{" "}
                        <span style={{ color: "orange" }}> 61% off</span>
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions style={{ justifyContent: "center" }}>
                    <Button
                      size="small"
                      variant="contained"
                      width="100%"
                      style={{ background: "#FF7F00" }}>
                      ADD TO CART
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
              <Grid item xs={3}>
                <Card>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      style={{ height: "120px" }}
                      image={brick}
                      alt="green iguana"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h6" component="div">
                        Red Clay Brick
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        <span>₹3,499</span>{" "}
                        <span style={{ textDecoration: "line-through" }}>
                          {" "}
                          ₹8,999
                        </span>{" "}
                        <span style={{ color: "orange" }}> 61% off</span>
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions style={{ justifyContent: "center" }}>
                    <Button
                      size="small"
                      variant="contained"
                      width="100%"
                      style={{ background: "#FF7F00" }}>
                      ADD TO CART
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
              <Grid item xs={3}>
                <Card>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      style={{ height: "120px" }}
                      image={brick}
                      alt="green iguana"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h6" component="div">
                        Red Clay Brick
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        <span>₹3,499</span>{" "}
                        <span style={{ textDecoration: "line-through" }}>
                          {" "}
                          ₹8,999
                        </span>{" "}
                        <span style={{ color: "orange" }}> 61% off</span>
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions style={{ justifyContent: "center" }}>
                    <Button
                      size="small"
                      variant="contained"
                      width="100%"
                      style={{ background: "#FF7F00" }}>
                      ADD TO CART
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
              <Grid item xs={3}>
                <Card>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      style={{ height: "120px" }}
                      image={brick}
                      alt="green iguana"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h6" component="div">
                        Red Clay Brick
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        <span>₹3,499</span>{" "}
                        <span style={{ textDecoration: "line-through" }}>
                          {" "}
                          ₹8,999
                        </span>{" "}
                        <span style={{ color: "orange" }}> 61% off</span>
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions style={{ justifyContent: "center" }}>
                    <Button
                      size="small"
                      variant="contained"
                      width="100%"
                      style={{ background: "#FF7F00" }}>
                      ADD TO CART
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
              <Grid item xs={3}>
                <Card>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      style={{ height: "120px" }}
                      image={brick}
                      alt="green iguana"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h6" component="div">
                        Red Clay Brick
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        <span>₹3,499</span>{" "}
                        <span style={{ textDecoration: "line-through" }}>
                          {" "}
                          ₹8,999
                        </span>{" "}
                        <span style={{ color: "orange" }}> 61% off</span>
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions style={{ justifyContent: "center" }}>
                    <Button
                      size="small"
                      variant="contained"
                      width="100%"
                      style={{ background: "#FF7F00" }}>
                      ADD TO CART
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default Bricks;
