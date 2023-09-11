import React from "react";
import {
  Grid,
  Typography,
  Breadcrumbs,
  Link,
  Button,
  TextField,
  ButtonGroup,
  Card,
  CardMedia,
  CardContent,
  Box,
} from "@mui/material";
import productOne from "../../images/product/productOne.png";
import productTwo from "../../images/product/productTwo.png";
import productThree from "../../images/product/productThree.png";
import productFour from "../../images/product/productFour.png";
import productFive from "../../images/product/productFive.png";
import SearchIcon from "@mui/icons-material/Search";
import reviewImg from "../../images/reviewImg.png";
import bestSelling from "../../images/superSavings/bestSelling.png";

function handleClick(event) {
  event.preventDefault();
  console.info("You clicked a breadcrumb.");
}

function Product() {
  return (
    <div style={{ padding: "20px" }}>
      <span style={{ color: "grey" }}>
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
          <Typography color="text.primary">
            Julian Engineered Wood 1 Door Wardrobe
          </Typography>
        </Breadcrumbs>
      </span>
      <Grid container spacing={2}>
        <Grid item xs={6} mt={3}>
          <img src={productOne} width="40%" />
          <Grid container mt={3}>
            <Grid xs={2}>
              <img src={productThree} />
            </Grid>
            <Grid xs={2}>
              <img src={productTwo} />
            </Grid>
            <Grid xs={2}>
              <img src={productFour} />
            </Grid>
            <Grid xs={2}>
              <img src={productFive} />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={6} mt={3}>
          <Typography variant="h4" gutterBottom>
            Julian Engineered Wood 1 Door Wardrobe
          </Typography>
          <Typography variant="caption" display="block" gutterBottom>
            <span>
              {" "}
              <Button
                style={{ background: "black", color: "white", padding: "0" }}>
                4.4
              </Button>{" "}
            </span>{" "}
            Ratings and Reviews
          </Typography>
          <Typography variant="h6" gutterBottom>
            <span> $ 3,499</span>{" "}
            <span style={{ color: "grey", textDecoration: "line-through" }}>
              {" "}
              $ 7,499
            </span>{" "}
            <span>61% offi</span>
          </Typography>
          <span>Coupon code available to get Extra 40% off</span>
          <Typography variant="caption" display="block" gutterBottom mt={3}>
            <span>Delivery</span>
            <span>
              {" "}
              <TextField
                id="search"
                label="Search"
                variant="outlined"
                InputProps={{
                  startAdornment: <SearchIcon sx={{ color: "grey.600" }} />,
                }}
                size="small"
              />
              <Button type="submit" variant="outlined">
                Search
              </Button>
            </span>
          </Typography>{" "}
          <Typography variant="caption" display="block" gutterBottom mt={1}>
            <span style={{ color: "grey" }}>Returnable </span>

            <span>7 days from Delivery </span>
          </Typography>{" "}
          <Typography variant="caption" display="block" gutterBottom mt={1}>
            <span style={{ color: "grey" }}> Shipping</span>

            <span> Shipping Extra</span>
          </Typography>{" "}
          <Grid mt={3}>
            <ButtonGroup
              variant="contained"
              aria-label="outlined danger button group">
              <Button>-</Button>
              <Button>0</Button>
              <Button>+</Button>
            </ButtonGroup>
            <span>
              {" "}
              <Button variant="outlined" color="warning">
                ADD TO CART
              </Button>{" "}
            </span>
            <span>
              {" "}
              <Button variant="outlined" color="warning">
                BUY NOW
              </Button>
            </span>
          </Grid>
        </Grid>
      </Grid>

      <div>
        <Grid container spacing={2} p={5}>
          <Grid item xs={6}>
            <Typography variant="h5" gutterBottom>
              Product Details
            </Typography>
            <Typography
              variant="body2"
              gutterBottom
              style={{ textAlign: "inherit" }}>
              Technical Specifications: Bolt cylinder - 60 mm & pin to lock body
              - 45x45 mm, for any door of thickness ranging from 28 mm to 55
              mm.Plantex – Fit and Forget: Assured help of 36 months for handles
              & 18 months for cylinders as a warranty against manufacturing
              defects. This handle set is also tested for more than 300,000
              cycles. Quality: This 8110 has a Premium virgin zinc alloy and
              Brass build. It comes with a reversible brass latch with the brass
              deadbolt on one side and key operation from the other side. This
              mortise door lock set is produced by an established industry with
              quality standards and cutting-edge technology.
            </Typography>
            <Typography variant="caption" display="block" gutterBottom>
              Storage
            </Typography>
            <Typography variant="caption" display="block" gutterBottom>
              Usage
            </Typography>
            <Typography variant="caption" display="block" gutterBottom>
              Installation
            </Typography>
            <Typography variant="caption" display="block" gutterBottom>
              Handling
            </Typography>
            <Typography variant="caption" display="block" gutterBottom>
              Return Policy
            </Typography>
          </Grid>
          <Grid item xs={4}>
            <Typography variant="h5" gutterBottom>
              Specifications
            </Typography>
            <Typography variant="overline" display="block" gutterBottom>
              General Info
            </Typography>
            <Typography variant="caption" display="block" gutterBottom>
              Brand
            </Typography>
            <Typography variant="caption" display="block" gutterBottom>
              About Brand
            </Typography>
            <Typography variant="caption" display="block" gutterBottom>
              Country of Origin
            </Typography>
            <Typography variant="caption" display="block" gutterBottom>
              Components per unit
            </Typography>
            <Typography variant="caption" display="block" gutterBottom>
              Warranty
            </Typography>
            <Typography variant="caption" display="block" gutterBottom>
              Guarantee
            </Typography>
            <Typography variant="caption" display="block" gutterBottom>
              Material
            </Typography>
            <Typography variant="overline" display="block" gutterBottom>
              Dimensions
            </Typography>
            <Typography variant="caption" display="block" gutterBottom>
              Product Weight
            </Typography>
            <Typography variant="caption" display="block" gutterBottom>
              Product Dimensions
            </Typography>
            <Typography variant="caption" display="block" gutterBottom>
              Packed box Dimensions
            </Typography>
            <Typography variant="subtitle2" gutterBottom>
              Packaging
            </Typography>
            <Typography variant="caption" display="block" gutterBottom>
              Size
            </Typography>
          </Grid>
        </Grid>
      </div>

      <Box style={{ padding: "30px", height: "380px" }}>
        <Typography variant="h5" gutterBottom>
          Ratings and Reviews
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={3}>
            <Card sx={{ maxWidth: 345 }}>
              <Button
                style={{ background: "black", color: "white", padding: "0" }}>
                4.4 *
              </Button>
              <CardMedia
                sx={{ height: 140 }}
                image={reviewImg}
                title="green iguana"
              />
              <CardContent>
                <Typography variant="subtitle2" gutterBottom>
                  This product does its job perfectly
                </Typography>
                <Typography variant="caption" display="block" gutterBottom>
                  1 month ago
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Good bricks which were easy to split and cut as needed.Lorem
                  ipsum dolor sit amet, consectetur adipiscing elit, sed
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={3}>
            <Card sx={{ maxWidth: 345 }}>
              <Button
                style={{ background: "black", color: "white", padding: "0" }}>
                4.4 *
              </Button>
              <CardMedia
                sx={{ height: 140 }}
                image={reviewImg}
                title="green iguana"
              />
              <CardContent>
                <Typography variant="subtitle2" gutterBottom>
                  This product does its job perfectly
                </Typography>
                <Typography variant="caption" display="block" gutterBottom>
                  1 month ago
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Good bricks which were easy to split and cut as needed.Lorem
                  ipsum dolor sit amet, consectetur adipiscing elit, sed
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={3}>
            <Card sx={{ maxWidth: 345 }}>
              <Button
                style={{ background: "black", color: "white", padding: "0" }}>
                4.4 *
              </Button>
              <CardMedia
                sx={{ height: 140 }}
                image={reviewImg}
                title="green iguana"
              />
              <CardContent>
                <Typography variant="subtitle2" gutterBottom>
                  This product does its job perfectly
                </Typography>
                <Typography variant="caption" display="block" gutterBottom>
                  1 month ago
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Good bricks which were easy to split and cut as needed.Lorem
                  ipsum dolor sit amet, consectetur adipiscing elit, sed
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={3}>
            <Card sx={{ maxWidth: 345 }}>
              <Button
                style={{ background: "black", color: "white", padding: "0" }}>
                4.4 *
              </Button>
              <CardMedia
                sx={{ height: 140 }}
                image={reviewImg}
                title="green iguana"
              />
              <CardContent>
                <Typography variant="subtitle2" gutterBottom>
                  This product does its job perfectly
                </Typography>
                <Typography variant="caption" display="block" gutterBottom>
                  1 month ago
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Good bricks which were easy to split and cut as needed.Lorem
                  ipsum dolor sit amet, consectetur adipiscing elit, sed
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>

      <Box style={{ padding: "30px", height: "380px" }}>
        <Typography style={{ fontSize: "16px", fontWeight: "600" }}>
        Similar Products
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={2}>
            <div>
              {" "}
              <img src={bestSelling} alt="bestSelling" />
            </div>
          </Grid>
          <Grid item xs={2}>
            <div>
              {" "}
              <img src={bestSelling} alt="bestSelling" />
            </div>
          </Grid>
          <Grid item xs={2}>
            <div>
              {" "}
              <img src={bestSelling} alt="bestSelling" />
            </div>
          </Grid>
          <Grid item xs={2}>
            <div>
              {" "}
              <img src={bestSelling} alt="bestSelling" />
            </div>
          </Grid>
          <Grid item xs={2}>
            <div>
              {" "}
              <img src={bestSelling} alt="bestSelling" />
            </div>
          </Grid>
          <Grid item xs={2}>
            <div>
              {" "}
              <img src={bestSelling} alt="bestSelling" />
            </div>
          </Grid>
        </Grid>
      </Box>

      <Box style={{ padding: "30px", height: "380px" }}>
        <Typography style={{ fontSize: "16px", fontWeight: "600" }}>
        You might also like
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={2}>
            <div>
              {" "}
              <img src={bestSelling} alt="bestSelling" />
            </div>
          </Grid>
          <Grid item xs={2}>
            <div>
              {" "}
              <img src={bestSelling} alt="bestSelling" />
            </div>
          </Grid>
          <Grid item xs={2}>
            <div>
              {" "}
              <img src={bestSelling} alt="bestSelling" />
            </div>
          </Grid>
          <Grid item xs={2}>
            <div>
              {" "}
              <img src={bestSelling} alt="bestSelling" />
            </div>
          </Grid>
          <Grid item xs={2}>
            <div>
              {" "}
              <img src={bestSelling} alt="bestSelling" />
            </div>
          </Grid>
          <Grid item xs={2}>
            <div>
              {" "}
              <img src={bestSelling} alt="bestSelling" />
            </div>
          </Grid>
        </Grid>
      </Box>

      <Box style={{ padding: "30px", height: "380px" }}>
        <Typography style={{ fontSize: "16px", fontWeight: "600" }}>
        Bought Together
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={2}>
            <div>
              {" "}
              <img src={bestSelling} alt="bestSelling" />
            </div>
          </Grid>
          <Grid item xs={2}>
            <div>
              {" "}
              <img src={bestSelling} alt="bestSelling" />
            </div>
          </Grid>
          <Grid item xs={2}>
            <div>
              {" "}
              <img src={bestSelling} alt="bestSelling" />
            </div>
          </Grid>
          <Grid item xs={2}>
            <div>
              {" "}
              <img src={bestSelling} alt="bestSelling" />
            </div>
          </Grid>
          <Grid item xs={2}>
            <div>
              {" "}
              <img src={bestSelling} alt="bestSelling" />
            </div>
          </Grid>
          <Grid item xs={2}>
            <div>
              {" "}
              <img src={bestSelling} alt="bestSelling" />
            </div>
          </Grid>
        </Grid>
      </Box>

      <Box style={{ padding: "30px", height: "380px" }}>
        <Typography style={{ fontSize: "16px", fontWeight: "600" }}>
        Recently Viewed
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={2}>
            <div>
              {" "}
              <img src={bestSelling} alt="bestSelling" />
            </div>
          </Grid>
          <Grid item xs={2}>
            <div>
              {" "}
              <img src={bestSelling} alt="bestSelling" />
            </div>
          </Grid>
          <Grid item xs={2}>
            <div>
              {" "}
              <img src={bestSelling} alt="bestSelling" />
            </div>
          </Grid>
          <Grid item xs={2}>
            <div>
              {" "}
              <img src={bestSelling} alt="bestSelling" />
            </div>
          </Grid>
          <Grid item xs={2}>
            <div>
              {" "}
              <img src={bestSelling} alt="bestSelling" />
            </div>
          </Grid>
          <Grid item xs={2}>
            <div>
              {" "}
              <img src={bestSelling} alt="bestSelling" />
            </div>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default Product;
