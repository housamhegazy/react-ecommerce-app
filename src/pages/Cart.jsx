import React from 'react'
import { Add, Delete, Remove, ShoppingCart } from "@mui/icons-material";
import {
  Button,
  IconButton,
  Paper,
  Typography,
  Box,
} from "@mui/material";
import { Stack } from "@mui/system";

import Badge from "@mui/material/Badge";
import { addToCart, decreaseProducts, increaseProducts,deleteProducts } from "Redux/productsSlice";
import { useSelector, useDispatch } from "react-redux";
// import { Helmet } from "react-helmet-async";
export default function Cart() {
  // @ts-ignore
  const { insertedProducts } = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  const QuantityFunc = (id)=>{
    const selectedProduct = insertedProducts.find((product)=>{return product.id === id })
    return Number(selectedProduct.Quantity)
  }
  let totalPrice = 0;
  let totalQuantity = 0;
  return (
    <Box>
      {/* <Helmet>
          <title>META Cart</title>
          <meta name="products" content={"largest store in usa"} />
        </Helmet> */}
      {insertedProducts.map((item) => {
          totalPrice += item.price * item.Quantity 
          totalQuantity += item.Quantity
        return (
          <Paper
            key={item.id}
            sx={{
              maxWidth: {xs:300,sm:320,md:400},
              margin: "auto",
              p: 2,
              display: "flex",
              alignItems: "center",
              justifyContent:"space-between",
              mb:2
            }}
          >
            <Button
              onClick={() => {
                dispatch(deleteProducts(item));
              }}
              size="small"
              variant="contained"
              color='error'
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
                  sx={{ mx:{sm:1} ,p:{xs:0,sm:"auto"},minWidth:"40px" }}
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
                  sx={{ mx:{sm:1} ,p:{xs:0,sm:"auto"},minWidth:"40px" }}
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

            <Typography sx={{fontSize:{xs:"14px",sm:"16px"}}}>$ {item.price * item.Quantity} </Typography>
            <img
              style={{ maxHeight: "70px" ,width:"70px"}}
              alt={'product'}
              src={item.image}
            />
          </Paper>
        );
      })}
      <Paper sx={{width:"200px",mx:"auto",p:"10px"}}>
        <Stack direction='row' sx={{justifyContent:"space-between",my:2}}>
          <Typography>subTotal price</Typography>
          <Typography>$ {totalPrice}</Typography>
        </Stack>
        <Stack direction='row' sx={{justifyContent:"space-between",my:2}}>
          <Typography>pieces </Typography>
          <Typography>{totalQuantity}</Typography>
        </Stack>
        <Button sx={{mt:2,mx:"auto",display:'block'}} variant='contained'>checkOut</Button>
      </Paper>

    </Box>
  )
}
