// import React,  from "react";
// import "./cart.css";
// import { products } from "./products";
// import ContextCart from "./ContextCart";
// import { reducer } from "./reducer";

// export const CartContext = createContext();

// const initialState = {
//   item: products,
//   totalAmount: 0,
//   totalItem: 0,
// };

// const Cart = () => {
//   // const [item, setItem] = useState(products);
//   const [state, dispatch] = useReducer(reducer, initialState);

//   // to delete the indv. elements from an Item Cart
//   const removeItem = (id) => {
//     return dispatch({
//       type: "REMOVE_ITEM",
//       payload: id,
//     });
//   };

//   // clear the cart
//   const clearCart = () => {
//     return dispatch({ type: "CLEAR_CART" });
//   };

//   // increment the item
//   const increment = (id) => {
//     return dispatch({
//       type: "INCREMENT",
//       payload: id,
//     });
//   };

//   // decrement the item
//   const decrement = (id) => {
//     return dispatch({
//       type: "DECREMENT",
//       payload: id,
//     });
//   };

//   // we will use the useEffect to update the data
//   useEffect(() => {
//     dispatch({ type: "GET_TOTAL" });
//     // console.log("Awesome");
//   }, [state.item]);

//   return (
//     <CartContext.Provider
//       value={{ ...state, removeItem, clearCart, increment, decrement }}>
//       <ContextCart />
//     </CartContext.Provider>
//   );
// };

// export default Cart;

import React from "react";
import {
  Box,
  Grid,
  Paper,
  Typography,
  ButtonGroup,
  Button,
  TextField,
  InputAdornment,
} from "@mui/material";
import productOne from "../../images/product/productOne.png";

function Cart() {
  const handleApplyClick = () => {
    // Add your logic for handling the "Apply" button click here
    console.log("Apply button clicked");
  };

  return (
    <>
      <Box sx={{ flexGrow: 1 }} mt={3} p={2}>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Paper elevation={3}>
              <Grid container>
                <Grid item xs={2} p={1}>
                  <img src={productOne} />
                </Grid>
                <Grid item xs={10} p={2}>
                  <Typography variant="subtitle2" display="block" gutterBottom>
                    Julian Engineered Wood 1 Door Wardrobe
                  </Typography>

                  <Typography variant="caption" display="block" gutterBottom>
                    <span>
                      <ButtonGroup
                        variant="outlined"
                        aria-label="outlined primary button group">
                        <Button>-</Button>
                        <Button>1</Button>
                        <Button>+</Button>
                      </ButtonGroup>
                    </span>
                    <span style={{ color: "orange", marginLeft: "30px" }}>
                      Remove Item
                    </span>
                  </Typography>
                  <Typography variant="button" display="block" gutterBottom>
                    <span>₹3,499</span>{" "}
                    <span
                      style={{ color: "grey", textDecoration: "line-through" }}>
                      ₹3,499
                    </span>{" "}
                    <span style={{ color: "orange" }}>19% Off</span>
                  </Typography>
                </Grid>
              </Grid>
            </Paper>
            <Paper elevation={3}>
              <Grid container mt={2}>
                <Grid item xs={2} p={1}>
                  <img src={productOne} />
                </Grid>
                <Grid item xs={10} p={2}>
                  <Typography variant="subtitle2" display="block" gutterBottom>
                    Julian Engineered Wood 1 Door Wardrobe
                  </Typography>

                  <Typography variant="caption" display="block" gutterBottom>
                    <span>
                      <ButtonGroup
                        variant="outlined"
                        aria-label="outlined primary button group">
                        <Button>-</Button>
                        <Button>1</Button>
                        <Button>+</Button>
                      </ButtonGroup>
                    </span>
                    <span style={{ color: "orange", marginLeft: "30px" }}>
                      Remove Item
                    </span>
                  </Typography>
                  <Typography variant="button" display="block" gutterBottom>
                    <span>₹3,499</span>{" "}
                    <span
                      style={{ color: "grey", textDecoration: "line-through" }}>
                      ₹3,499
                    </span>{" "}
                    <span style={{ color: "orange" }}>19% Off</span>
                  </Typography>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
          <Grid item xs={4}>
            <Paper elevation={3} >
              <Typography variant="h6" gutterBottom p={1}>
                Cart Summary
              </Typography>
              <Grid container spacing={2} p={1}>
                <Grid item xs={6}>
                  <Typography variant="body2" display="block" gutterBottom>
                    Items in cart
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography
                    variant="body2"
                    display="block"
                    gutterBottom
                    style={{ float: "right" }}>
                    12
                  </Typography>
                </Grid>
              </Grid>
              <Grid container spacing={2} p={1}>
                <Grid item xs={6}>
                  <Typography variant="body2" display="block" gutterBottom>
                    Price
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography
                    variant="body2"
                    display="block"
                    gutterBottom
                    style={{ float: "right" }}>
                    1200
                  </Typography>
                </Grid>
              </Grid>
              <Grid container spacing={2} p={1}>
                <Grid item xs={6}>
                  <Typography
                    variant="body2"
                    display="block"
                    gutterBottom
                    style={{ color: "green" }}>
                    Discount
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography
                    variant="body2"
                    display="block"
                    gutterBottom
                    style={{ float: "right", color: "green" }}>
                    1290
                  </Typography>
                </Grid>
              </Grid>

              <Grid
                container
                alignItems="flex-end"
                style={{ justifyContent: "center" }}>
                <Grid item>
                  <TextField
                    variant="outlined"
                    size="small"
                    placeholder="Apply coupon"
                  />
                </Grid>
                <Grid item>
                  <Button variant="outlined" onClick={handleApplyClick}>
                    Apply
                  </Button>
                </Grid>
              </Grid>

              <Typography
                variant="caption"
                display="block"
                gutterBottom
                style={{ color: "orange", textAlign: "center" }}>
                Available Coupons
              </Typography>

              <Grid container spacing={2} p={1}>
                <Grid item xs={6}>
                  <Typography variant="body2" display="block" gutterBottom>
                    Total Amount
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography
                    variant="body2"
                    display="block"
                    gutterBottom
                    style={{ float: "right" }}>
                    1290
                  </Typography>
                </Grid>
              </Grid>
              <Grid container spacing={2} p={1}>
                <Grid item xs={12}>
<Button style={{background:'#FF7F00',color:'white'}} fullWidth>CHECKOUT</Button>
                    </Grid></Grid>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default Cart;
