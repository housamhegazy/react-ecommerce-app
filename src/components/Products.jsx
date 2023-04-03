import {
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
import { Add, Favorite, MoreVert, Remove, Share } from "@mui/icons-material";
import { Box } from "@mui/system";
import {
  addToCart,
  addtofavorite,
  decreaseProducts,
  increaseProducts,
  removefavorite,
} from "Redux/productsSlice";

export default function Products({data,navigate,favoritProducts,dispatch,insertedProducts,QuantityFunc}) {
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
                sx={{ cursor: "pointer" }}
                onClick={() => {
                  navigate(`/ProductDetails/${item.id}`);
                }}
                component="img"
                height="194"
                image={item.image}
                alt="Paella dish"
              />
              <CardContent sx={{ height: "100px", overflow: "hidden" }}>
                <Typography variant="body2" color="text.secondary">
                  {item.description}
                </Typography>
              </CardContent>
              <CardActions disableSpacing>
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

                <IconButton aria-label="share">
                  <Share />
                </IconButton>
                <Stack sx={{ flexGrow: 1 }} />
                <Typography>$ {item.price}</Typography>
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
                    <IconButton
                      onClick={() => {
                        dispatch(decreaseProducts(item));
                      }}
                      aria-label="remove"
                    >
                      <Remove />
                    </IconButton>

                    <Badge
                      sx={{ mx: "5px" }}
                      badgeContent={QuantityFunc(item.id)}
                      color="primary"
                    />
                    <IconButton
                      onClick={() => {
                        dispatch(increaseProducts(item));
                      }}
                      aria-label="add"
                    >
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

