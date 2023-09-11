import React from "react";
import {Typography,Paper,Grid,Button,ButtonGroup} from "@mui/material";
import wishlist from "../../images/whislist.png"
import ShareIcon from '@mui/icons-material/Share';
import DeleteIcon from '@mui/icons-material/Delete';

function Wishlist() {
  return (
    <>
      <div style={{ padding: "20px" }}>
      <Typography variant="h6" gutterBottom style={{color:'orange'}}>
      Wishlist
      </Typography>

      <div style={{marginTop:'20px'}}>
      <Paper elevation={3} >
      <Grid container spacing={2} p={2}>
  <Grid item xs={1} >
    <img src={wishlist} />
  </Grid>
  <Grid item xs={8}>
  <Typography variant="subtitle1" gutterBottom>
  Julian Engineered Wood 1 Door Wardrobe 
      </Typography>
      <Typography variant="caption" display="block" gutterBottom>
      Item added on 15th Aug 2023
      </Typography>
      <Typography variant="button" display="block" gutterBottom>
        <span>₹3,499</span> <span style={{color:'grey',textDecoration:'line-through'}}>₹3,499</span> <span style={{color:'orange'}}>19% Off</span>
      </Typography>
  </Grid>
  <Grid item xs={2}>
  <Typography variant="caption" display="block" gutterBottom style={{color:'grey'}}>
        <span> <ShareIcon/> Share</span> <span style={{float:'right'}}> <DeleteIcon/> Delete</span>
      </Typography>
      <Button variant="contained" style={{background:'#FF7F00',color:'white',width:'100%',marginTop:'5px'}}>ADD TO CART</Button>
      <ButtonGroup variant="outlined" aria-label="outlined primary button group" style={{marginTop:'5px'}}>
  <Button>+</Button>
  <Button>12</Button>
  <Button>-</Button>
</ButtonGroup>
  </Grid>
  
  
</Grid>
         </Paper>
      </div>
      <div style={{marginTop:'20px'}}>
      <Paper elevation={3} >
      <Grid container spacing={2} p={2}>
  <Grid item xs={1} >
    <img src={wishlist} />
  </Grid>
  <Grid item xs={8}>
  <Typography variant="subtitle1" gutterBottom>
  Julian Engineered Wood 1 Door Wardrobe 
      </Typography>
      <Typography variant="caption" display="block" gutterBottom>
      Item added on 15th Aug 2023
      </Typography>
      <Typography variant="button" display="block" gutterBottom>
        <span>₹3,499</span> <span style={{color:'grey',textDecoration:'line-through'}}>₹3,499</span> <span style={{color:'orange'}}>19% Off</span>
      </Typography>
  </Grid>
  <Grid item xs={2}>
  <Typography variant="caption" display="block" gutterBottom style={{color:'grey'}}>
        <span> <ShareIcon/> Share</span> <span style={{float:'right'}}> <DeleteIcon/> Delete</span>
      </Typography>
      <Button variant="contained" style={{background:'#FF7F00',color:'white',width:'100%',marginTop:'5px'}}>ADD TO CART</Button>
      <ButtonGroup variant="outlined" aria-label="outlined primary button group" style={{marginTop:'5px'}}>
  <Button>+</Button>
  <Button>12</Button>
  <Button>-</Button>
</ButtonGroup>
  </Grid>
  
  
</Grid>
         </Paper>
      </div>
      </div>
    </>
  );
}

export default Wishlist;
