import React from "react";
import { Carousel } from "react-responsive-carousel";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
  CardActionArea,
} from "@mui/material";
import "react-responsive-carousel/lib/styles/carousel.min.css";
// import imageOne from "./slider_images/Landing Page - Slider_1.png";
// import imageTwo from "./slider_images/Landing Page - Slider_2.png";
// import imageThree from "./slider_images/Landing Page - Slider_3.png";
import cement from "../../../images/categories/cement.png";
import bricks from "../../../images/categories/bricks.png";
import steel from "../../../images/categories/steel.png";
import aggregates from "../../../images/categories/aggregates.png";
import sanit from "../../../images/categories/sanit.png";
import electricals from "../../../images/categories/electricals.png";
import hvac from "../../../images/categories/hvac.png";
import flooring from "../../../images/categories/flooring.png";
import hardwaree from "../../../images/categories/hardwaree.png";
import roofing from "../../../images/categories/roofing.png";
import doors from "../../../images/categories/doors.png";
import boards from "../../../images/categories/boards.png";
import modular from "../../../images/categories/modular.png";
import bk from "../../../images/categories/bk.png";

import air from "../../../images/recommand/air.png";
import bathing from "../../../images/recommand/bathing.png";
import bathroom from "../../../images/recommand/bathroom.png";
import geometric from "../../../images/recommand/geometric.png";
// import door from "../../../images/recommand/door.png";

import kelly from "../../../images/popular/kelly.png";
import three from "../../../images/popular/three.png";
import mercury from "../../../images/popular/mercury.png";
import stable from "../../../images/popular/stable.png";

import supersavingOne from "../../../images/superSavings/supersavingOne.png";
import supersavingTwo from "../../../images/superSavings/supersavingTwo.png";
import supersavingThree from "../../../images/superSavings/supersavingThree.png";
import bestSelling from "../../../images/superSavings/bestSelling.png";
import bannerOne from "../../../images/bannerOne.png";
import blogOne from "../../../images/blogOne.png";
import bannerTwo from "../../../images/bannerTwo.png";
import brandOne from "../../../images/brandOne.png";
import brandTwo from "../../../images/brandTwo.png";

const BodyData = () => {
  const images = [
    cement,
    bricks,
    steel,
    aggregates,

    electricals,
    hvac,
    flooring,
    hardwaree,
    roofing,
    doors,
    boards,
    modular,
    cement,
    sanit,
  ];
  const groupSize = 7; // Number of images to display in each group

  const groups = [];
  for (let i = 0; i < images.length; i += groupSize) {
    const group = images.slice(i, i + groupSize);
    groups.push(group);
  }

  const recommandImage = [air, bathing, bathroom, geometric, bathing];

  const groupSizeRecommand = 5; // Number of images to display in each group

  const groupsRecommand = [];
  for (let i = 0; i < recommandImage.length; i += groupSizeRecommand) {
    const group = recommandImage.slice(i, i + groupSizeRecommand);
    groupsRecommand.push(group);
  }

  return (
    <div>
      {/* <Carousel showThumbs={false}>
        <div>
          <img src={imageOne} alt="Image 1" />
        </div>
        <div>
          <img src={imageTwo} alt="Image 2" />
        </div>
        <div>
          <img src={imageThree} alt="Image 3" />
        </div>
      </Carousel> */}

      <Box>
        <img
          src={bk}
          alt="Image 3"
          style={{ width: "100%", height: "200px" }}
        />
      </Box>

      <Box style={{ padding: "30px", height: "320px" }}>
        <Typography style={{ fontSize: "16px", fontWeight: "600" }}>
          Shop Popular Categories
        </Typography>
        <Carousel
          showThumbs={false}
          showArrows={true}
          emulateTouch={true} // Allow swiping on mobile
        >
          {groups.map((group, groupIndex) => (
            <div key={groupIndex} style={{ display: "flex", height: "300px" }}>
              {group.map((image, imageIndex) => (
                <div key={imageIndex} style={{ flex: "1", padding: "5px" }}>
                  <img
                    src={image}
                    alt={`Image ${groupIndex * groupSize + imageIndex + 1}`}
                  />
                </div>
              ))}
            </div>
          ))}
        </Carousel>
      </Box>

      <Box style={{ padding: "30px", height: "400px" }}>
        <Typography style={{ fontSize: "16px", fontWeight: "600" }}>
          Recommended for you
        </Typography>
        <Carousel
          showThumbs={false}
          showArrows={true}
          emulateTouch={true} // Allow swiping on mobile
        >
          {groupsRecommand.map((group, groupIndex) => (
            <div key={groupIndex} style={{ display: "flex", height: "370px" }}>
              {group.map((image, imageIndex) => (
                <div key={imageIndex} style={{ flex: "1", padding: "5px" }}>
                  <img
                    src={image}
                    alt={`Image ${groupIndex * groupSize + imageIndex + 1}`}
                  />
                </div>
              ))}
            </div>
          ))}
        </Carousel>
      </Box>
      <Box style={{ padding: "30px", height: "350px" }}>
        <Typography style={{ fontSize: "16px", fontWeight: "600" }}>
          Explore our Popular Brands
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={3}>
            <div>
              {" "}
              <img src={kelly} alt="kelly" />
              <Typography
                style={{ fontSize: "14px", fontWeight: "600" }}
                gutterBottom>
                French country looks designed for real life
              </Typography>
            </div>
          </Grid>
          <Grid item xs={3}>
            <div>
              {" "}
              <img src={three} alt="three" />
              <Typography
                style={{ fontSize: "14px", fontWeight: "600" }}
                gutterBottom>
                French country looks designed for real life
              </Typography>
            </div>
          </Grid>
          <Grid item xs={3}>
            <div>
              {" "}
              <img src={mercury} alt="mercury" />
              <Typography
                style={{ fontSize: "14px", fontWeight: "600" }}
                gutterBottom>
                French country looks designed for real life
              </Typography>
            </div>
          </Grid>
          <Grid item xs={3}>
            <div>
              {" "}
              <img src={stable} alt="stable" />
              <Typography
                style={{ fontSize: "14px", fontWeight: "600" }}
                gutterBottom>
                French country looks designed for real life
              </Typography>
            </div>
          </Grid>
        </Grid>
      </Box>

      <Box style={{ padding: "30px", height: "450px" }}>
        <Typography style={{ fontSize: "16px", fontWeight: "600" }}>
          Explore our Popular Brands
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <div>
              {" "}
              <img src={supersavingOne} alt="kelly" />
            </div>
          </Grid>
          <Grid item xs={4}>
            <div>
              {" "}
              <img src={supersavingTwo} alt="three" />
            </div>
          </Grid>
          <Grid item xs={4}>
            <div>
              {" "}
              <img src={supersavingThree} alt="mercury" />
            </div>
          </Grid>
        </Grid>
      </Box>

      <Box style={{ padding: "30px", height: "380px" }}>
        <Typography style={{ fontSize: "16px", fontWeight: "600" }}>
          Best Selling
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
          Latest Added
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

      <Box style={{ padding: "30px", height: "170px" }}>
        <img src={bannerOne} alt="bannerOne" />
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

      <Box style={{ padding: "30px", height: "460px" }}>
      <Typography style={{ fontSize: "16px", fontWeight: "600" }}>
          Blogs
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={3}>
            <Card sx={{ maxWidth: 345 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image={blogOne}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div" color="orange">
                  AFFORDABLE HOUSING
                  </Typography>
                  <Typography variant="h6" color="text.secondary" fontWeight='600'>
                  Houston to soon have 50 new residential units for youth leaving foster care
                  </Typography>
                  <Typography variant="h6" color="text.secondary">
                  The Houston Alumni and Youth (HAY) Center has broken ground on its 59,000-sf campus, with completion expected by July 2024.
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs={3}>
            <Card sx={{ maxWidth: 345 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image={blogOne}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div" color="orange">
                  AFFORDABLE HOUSING
                  </Typography>
                  <Typography variant="h6" color="text.secondary" fontWeight='600'>
                  Houston to soon have 50 new residential units for youth leaving foster care
                  </Typography>
                  <Typography variant="h6" color="text.secondary">
                  The Houston Alumni and Youth (HAY) Center has broken ground on its 59,000-sf campus, with completion expected by July 2024.
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs={3}>
            <Card sx={{ maxWidth: 345 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image={blogOne}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div" color="orange">
                  AFFORDABLE HOUSING
                  </Typography>
                  <Typography variant="h6" color="text.secondary" fontWeight='600'>
                  Houston to soon have 50 new residential units for youth leaving foster care
                  </Typography>
                  <Typography variant="h6" color="text.secondary">
                  The Houston Alumni and Youth (HAY) Center has broken ground on its 59,000-sf campus, with completion expected by July 2024.
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs={3}>
            <Card sx={{ maxWidth: 345 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image={blogOne}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div" color="orange">
                  AFFORDABLE HOUSING
                  </Typography>
                  <Typography variant="h6" color="text.secondary" fontWeight='600'>
                  Houston to soon have 50 new residential units for youth leaving foster care
                  </Typography>
                  <Typography variant="h6" color="text.secondary">
                  The Houston Alumni and Youth (HAY) Center has broken ground on its 59,000-sf campus, with completion expected by July 2024.
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        </Grid>
      </Box>

      <Box style={{ padding: "30px", height: "180px" }}>
        <img src={bannerTwo} alt="bannerTwo" />
      </Box>

      <Box style={{ padding: "30px", height: "260px" }}>
        <Typography style={{ fontSize: "16px", fontWeight: "600" , textAlign:'center' }}>
        Shop our brands
        </Typography>
        <div>
        <img src={brandOne} alt="brandOne" />
        </div>
       <div>
       <img src={brandTwo} alt="brandTwo" />
       </div>
       
        </Box>
    </div>
  );
};

export default BodyData;
