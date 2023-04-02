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
import { red } from "@mui/material/colors";
import { Add, Favorite, MoreVert, Remove, Share } from "@mui/icons-material";
import { Box } from "@mui/system";
import { addToCart } from "Redux/productsSlice";

import { useSelector, useDispatch } from 'react-redux'
export default function Home() {
  const { data, error, isLoading } = useGetProductsByNameQuery();
  // @ts-ignore
  const {productsinCart} = useSelector((state) => state.counter)
  const dispatch = useDispatch()
  if (isLoading) {
    return <Typography>loading .........</Typography>;
  }
  if (error) {
    return <Typography>error .........</Typography>;
  }
  if (data) {
    console.log(data);
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

                {/* add button  */}
                {true && (
                  <Button onClick={()=>{
                    dispatch(addToCart(item))
                  }} sx={{ ml: "10px" }} size="small" variant="contained">
                    add to cart
                  </Button>
                )}
                {false && (
                  <Stack
                    direction={"row"}
                    sx={{
                      justifyContent: "center",
                      alignItems: "center",
                      ml: "10px",
                    }}
                  >
                    <IconButton aria-label="remove">
                      <Remove />
                    </IconButton>

                    <Badge
                      sx={{ mx: "5px" }}
                      badgeContent={4}
                      color="primary"
                    />
                    <IconButton aria-label="add">
                      <Add />
                    </IconButton>
                  </Stack>
                )}

                <Stack sx={{ flexGrow: 1 }} />
                <Typography>$ 1000</Typography>
              </CardActions>
            </Card>
          );
        })}
      </Stack>
    );
  }
}
