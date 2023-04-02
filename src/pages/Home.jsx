import {
  Avatar,
  Badge,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import { useGetProductsByNameQuery } from "../Redux/productsApi";
import { Add, Favorite, MoreVert, Remove, Share } from "@mui/icons-material";
import { Box } from "@mui/system";
import { addToCart, decreaseProducts, increaseProducts } from "Redux/productsSlice";

import { useSelector, useDispatch } from "react-redux";
export default function Home() {
  const { data, error, isLoading } = useGetProductsByNameQuery();
  // @ts-ignore
  const { insertedProducts } = useSelector((state) => state.counter);

  const dispatch = useDispatch();
  const QuantityFunc = (id)=>{
    const selectedProduct = insertedProducts.find((product)=>{return product.id === id })
    return selectedProduct.Quantity
  }
  if (isLoading) {
    return <Typography>loading .........</Typography>;
  }
  if (error) {
    return <Typography>error .........</Typography>;
  }
  if (data) {
    return (
      <Stack
        direction="row"
        sx={{
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        {data.map((item) => {
          return (
            <Card
              key={item.id}
              sx={{ maxWidth: { xs: 220, sm: 230, md: 320 }, m: 2 }}
            >
              <CardHeader
                sx={{ height: "50px", overflow: "hidden" }}
                action={
                  <IconButton aria-label="settings">
                    <MoreVert />
                  </IconButton>
                }
                subheader="September 14, 2016"
              />
              <Typography sx={{ mx: 2, height: "50px", overflow: "hidden" }}>
                {item.title}
              </Typography>
              <CardMedia
                component="img"
                height="194"
                image={item.url}
                alt="Paella dish"
              />
              <CardContent sx={{ height: "100px", overflow: "hidden" }}>
                <Typography variant="body2" color="text.secondary">
                  This impressive paella is a perfect party dish and a fun meal
                  to cook together with your guests. Add 1 cup of frozen peas
                  along with the mussels, if you like.
                </Typography>
              </CardContent>
              <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                  <Favorite />
                </IconButton>
                <IconButton aria-label="share">
                  <Share />
                </IconButton>
                <Stack sx={{ flexGrow: 1 }} />
                <Typography>$ 1000</Typography>
              </CardActions>

              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  my: "10px",
                }}
              >
                {/* add button  */}
                {insertedProducts.find((product) => product.id === item.id) ? (
                  <Stack
                    direction={"row"}
                    sx={{
                      justifyContent: "center",
                      alignItems: "center",
                      ml: "10px",
                    }}
                  >
                    <IconButton onClick={()=>{
                      dispatch(decreaseProducts(item))
                    }} aria-label="remove">
                      <Remove />
                    </IconButton>

                    <Badge
                      sx={{ mx: "5px" }}
                      badgeContent={QuantityFunc(item.id)}
                      color="primary"
                    />
                    <IconButton onClick={()=>{
                      dispatch(increaseProducts(item))
                    }} aria-label="add">
                      <Add />
                    </IconButton>
                  </Stack>
                ) : (
                  <Button
                    onClick={() => {
                      dispatch(addToCart(item));
                    }}
                    size="small"
                    variant="contained"
                  >
                    add to cart
                  </Button>
                )}
              </Box>
            </Card>
          );
        })}
      </Stack>
    );
  }
}
