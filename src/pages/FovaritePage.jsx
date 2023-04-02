import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react'
import { useSelector, useDispatch } from "react-redux";
export default function FovaritePage() {
  const dispatch = useDispatch();
  // @ts-ignore
  const { favoritProducts } = useSelector((state) => state.counter);
  console.log(favoritProducts)
  return (
    <Box>
      {favoritProducts.map((item)=>{
        return(
          <Typography key={item.id}>{item.id}</Typography>
        )
      })}
    </Box>
  )
}
