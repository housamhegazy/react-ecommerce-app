import {
  Favorite,
} from "@mui/icons-material";
import {
  IconButton,
  Paper,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  removefavorite,
  addtofavorite,
} from "Redux/productsSlice";
export default function FovaritePage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // @ts-ignore
  const {  favoritProducts } = useSelector(
    // @ts-ignore
    (state) => state.counter
  );
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
                favoritProducts.find((ele) => {
                  return ele.id === item.id;
                })
                  ? dispatch(removefavorite(item))
                  : dispatch(addtofavorite(item));
              }}
              aria-label="add to favorites"
            >
              {favoritProducts.find((ele) => ele.id === item.id) ? (
                <Favorite color="error" />
              ) : (
                <Favorite />
              )}
            </IconButton>
            <Typography
              sx={{ height: "70px", overflow: "hidden",maxWidth:"200px" }}
              variant="body2"
              color="text.secondary"
            >
              {item.description}
            </Typography>

            <img
              onClick={() => {
                navigate(`/ProductDetails/${item.id}`);
              }}
              style={{ maxHeight: "70px", width: "70px", cursor: "pointer" }}
              alt={"product"}
              src={item.image}
            />
          </Paper>
        );
      })}
    </Box>
  );
}
