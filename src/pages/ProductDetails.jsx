import "./productDetails.css";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
// import DetailsThumb from "./productDetailsThumb";
import { useGetproductDetailsApiByNameQuery } from "../Redux/productsApi";
import { Remove, Add, ShoppingCart } from "@mui/icons-material";
import { Stack, Button, Badge } from "@mui/material";
import {
  decreaseProducts,
  increaseProducts,
  addToCart,
} from "Redux/productsSlice";
import Loading from "./LoadingPage";
import Errorpage from "./Errorpage";
import { Helmet } from 'react-helmet-async';

export default function ProductDetails() {
  const param = useParams();
  
  const { data, error, isLoading } = useGetproductDetailsApiByNameQuery(
    Number(param.id)
  );

  // @ts-ignore
  const { insertedProducts } = useSelector((state) => state.counter);

  const dispatch = useDispatch();
  const QuantityFunc = (id) => {
    const myproduct = insertedProducts.find((product) => product.id === id);
    return myproduct.Quantity;
  };
  if (isLoading) {
    return (
      <Loading/>
    );
  }
  if (error) {
    return (
      <Errorpage/>
    );
  }
  if (data) {
    return (
      <div className="app productdetails">
        <Helmet>
            <title>product details</title>
            <meta name="product details" content={data.description} />
          </Helmet>
        <div className="details" key={data.id}>
          <div className="big-img">
            <img src={data.image} alt="" />
          </div>
  
          <div className="box">
            <div className="row">
              <h2>{data.title}</h2>
              <span>${data.price}</span>
            </div>
  
            <p>{data.description}</p>
  
            {insertedProducts.find((product) => product.id === data.id) ? (
              <Stack direction="row" sx={{ alignItems: "center", mt: 3 }}>
                <Button
                  size="small"
                  onClick={() => {
                    dispatch(decreaseProducts(data));
                  }}
                  sx={{ mx: 1 }}
                >
                  <Remove fontSize="small" />
                </Button>
                <Badge
                  sx={{ mx: "5px" }}
                  badgeContent={QuantityFunc(data.id)}
                  color="primary"
                />
                <Button
                  size="small"
                  onClick={() => {
                    dispatch(increaseProducts(data));
                  }}
                  sx={{ mx: 1 }}
                >
                  <Add fontSize="small" />
                </Button>
              </Stack>
            ) : (
              <Button
                onClick={() => {
                  dispatch(addToCart(data));
                }}
                size="small"
                sx={{ textTransform: "capitalize", mt: 2 }}
                variant="contained"
              >
                <ShoppingCart />
                add to Basket
              </Button>
            )}
          </div>
        </div>
      </div>
    );
  }
  
}
