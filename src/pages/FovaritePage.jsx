import { Delete, Remove, Add, ShoppingCart, Favorite } from '@mui/icons-material';
import { Badge, Button, IconButton, Paper, Stack, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react'
import { useSelector, useDispatch } from "react-redux";
import { deleteProducts, decreaseProducts, increaseProducts, addToCart, removefavorite, addtofavorite } from 'Redux/productsSlice';
export default function FovaritePage() {
  const dispatch = useDispatch();
  // @ts-ignore
  const {insertedProducts, favoritProducts } = useSelector((state) => state.counter);
  return (
    <Box>
    {/* <Helmet>
        <title>META Cart</title>
        <meta name="products" content={"largest store in usa"} />
      </Helmet> */}
    {favoritProducts.map((item) => {
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
           <IconButton
                  onClick={() => {
                    favoritProducts.find((ele) => {return ele.id === item.id}) ?
                    dispatch(removefavorite(item))
                    :
                    dispatch(addtofavorite(item))
                  }}
                  aria-label="add to favorites"
                >
                  {favoritProducts.find((ele) => ele.id === item.id) ? (
                    <Favorite color="error" />
                  ) : (
                    <Favorite />
                  )}
                </IconButton>
          
          <img
            style={{ maxHeight: "70px", width: "70px" }}
            alt={"product"}
            src={item.image}
          />
        </Paper>
      )
    })}
  </Box>
  )
}
