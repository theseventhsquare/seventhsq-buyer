import React from "react";
import {
  Paper,
  Typography,
  Box,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
} from "@mui/material";

function BricksFilter() {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <div>
      <Paper
        elevation={3}
        style={{ height: "440px", width: "350px", textAlign: "center" }}>
          <div style={{background:'#686c72',color:'white'}}>
          <Typography variant="h5" gutterBottom p={2}>
          Filter Products
        </Typography>
          </div>
      
        <Box
          component="form"
          sx={{
            "& .MuiTextField-root": { m: 1, width: "25ch" },
          }}
          noValidate
          autoComplete="off">
          <div style={{ padding: "5px" }}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">BRANDS</InputLabel>
              <Select
                size="small"
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={age}
                label="Age"
                onChange={handleChange}>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
            </div>
            <div style={{ padding: "5px" }}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">PRICE</InputLabel>
              <Select
                size="small"
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={age}
                label="Age"
                onChange={handleChange}>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
            </div>
            
            <div style={{ padding: "5px" }}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">DISCOUNT</InputLabel>
              <Select
                size="small"
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={age}
                label="Age"
                onChange={handleChange}>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
            </div>
           
            <div style={{ padding: "5px" }}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">MATERIAL</InputLabel>
              <Select
                size="small"
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={age}
                label="Age"
                onChange={handleChange}>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
            </div>
            
            <div style={{ padding: "5px" }}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">SIZE</InputLabel>
              <Select
                size="small"
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={age}
                label="Age"
                onChange={handleChange}>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
            </div>
            
            <div style={{ padding: "5px" }}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">RATINGS</InputLabel>
              <Select
                size="small"
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={age}
                label="Age"
                onChange={handleChange}>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
            </div>
            <div style={{ padding: "5px" }}>
<Button style={{background:'orange',color:'white',width:'100%'}}> FILTER</Button>
              </div>
         
        </Box>
      </Paper>
    </div>
  );
}

export default BricksFilter;
