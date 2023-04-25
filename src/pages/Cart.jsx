import React from "react";
import { Add, Delete, Remove, ShoppingCart } from "@mui/icons-material";
import { Button, IconButton, Paper, Typography, Box } from "@mui/material";
import { Stack } from "@mui/system";

import Badge from "@mui/material/Badge";
import {
  addToCart,
  decreaseProducts,
  increaseProducts,
  deleteProducts,
} from "Redux/productsSlice";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import CheckOut from "components/CheckoutPaypal/CheckOut";
// import PayPal2 from "components/paypalll";
export default function Cart() {
  // @ts-ignore
  const { insertedProducts } = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  const navigate=useNavigate()
  const QuantityFunc = (id) => {
    const selectedProduct = insertedProducts.find((product) => {
      return product.id === id;
    });
    return Number(selectedProduct.Quantity);
  };
  let totalPrice = 0;
  let totalQuantity = 0;
  if(insertedProducts.length < 1){
    return(
      <Stack sx={{justifyContent:"center",alignItems:"center"}}>
    <Typography>
      cart empty
    </Typography>
    </Stack>
    )
  }
  return (
    <Box>
      <Helmet>
          <title> Cart</title>
          <meta name="products" content={"largest store in usa"} />
        </Helmet>
      {insertedProducts.map((item) => {
        totalPrice += item.price * item.Quantity;
        totalQuantity += item.Quantity;
        return (
          <Paper
            key={item.id}
            sx={{
              maxWidth: { xs: 300, sm: 320, md: 400 },
              margin: "auto",
              p: 2,
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              mb: 2,
            }}
          >
            <Button
              onClick={() => {
                dispatch(deleteProducts(item));
              }}
              size="small"
              variant="contained"
              color="error"
              sx={{
                display: { xs: "none", sm: "block" },
                textTransform: "capitalize",
              }}
            >
              delete
            </Button>

            <IconButton
              sx={{ display: { xs: "block", sm: "none" } }}
              onClick={() => {
                dispatch(deleteProducts(item));
              }}
              aria-label="delete"
              size="small"
            >
              <Delete fontSize="small" color="error" />
            </IconButton>

            {insertedProducts.find((product) => product.id === item.id) ? (
              <Stack direction="row" sx={{ alignItems: "center" }}>
                <Button
                  size="small"
                  onClick={() => {
                    dispatch(decreaseProducts(item));
                  }}
                  sx={{
                    mx: { sm: 1 },
                    p: { xs: 0, sm: "auto" },
                    minWidth: "40px",
                  }}
                >
                  <Remove fontSize="small" />
                </Button>
                <Badge
                  sx={{ mx: "5px" }}
                  badgeContent={QuantityFunc(item.id)}
                  color="primary"
                />
                <Button
                  size="small"
                  onClick={() => {
                    dispatch(increaseProducts(item));
                  }}
                  sx={{
                    mx: { sm: 1 },
                    p: { xs: 0, sm: "auto" },
                    minWidth: "40px",
                  }}
                >
                  <Add fontSize="small" />
                </Button>
              </Stack>
            ) : (
              <Button
                onClick={() => {
                  dispatch(addToCart(item));
                }}
                size="small"
                sx={{ textTransform: "capitalize" }}
                variant="contained"
              >
                <ShoppingCart />
                add to Basket
              </Button>
            )}

            <Typography sx={{ fontSize: { xs: "14px", sm: "16px" } }}>
              $ {item.price * item.Quantity.toFixed(2)}{" "}
            </Typography>
            <img
             onClick={() => {
              navigate(`/ProductDetails/${item.id}`);
            }}
              style={{ maxHeight: "70px", width: "70px",cursor:"pointer" }}
              alt={"product"}
              src={item.image}
            />
          </Paper>
        );
      })}
      <Paper sx={{ width: "200px", mx: "auto", p: "10px" }}>
        <Stack direction="row" sx={{ justifyContent: "space-between", my: 2 }}>
          <Typography>Total price</Typography>
          <Typography>$ {totalPrice.toFixed(2)}</Typography>
        </Stack>
        <Stack direction="row" sx={{ justifyContent: "space-between", my: 2 }}>
          <Typography>pieces </Typography>
          <Typography>{totalQuantity}</Typography>
        </Stack>
      </Paper>
      
      <CheckOut price= {totalPrice.toFixed(2)}/>
      {/* another way */}
      {/* <PayPal2 price= {totalPrice.toFixed(2)}/> */}
    </Box>
  );
}
