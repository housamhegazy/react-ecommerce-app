
import { useNavigate } from "react-router-dom";
import { useGetProductsByNameQuery } from "../Redux/productsApi";

import { useSelector, useDispatch } from "react-redux";
import Loading from "./LoadingPage";
import Errorpage from "./Errorpage";
import Products from "components/Products";
import { Helmet } from 'react-helmet-async';
import Landing from "components/Landing";

export default function Home() {
  const { data, error, isLoading } = useGetProductsByNameQuery();

  const { insertedProducts, favoritProducts } = useSelector(
    // @ts-ignore
    (state) => state.counter
  );

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const QuantityFunc = (id) => {
    const selectedProduct = insertedProducts.find((product) => {
      return product.id === id;
    });
    return selectedProduct.Quantity;
  };
  if (isLoading) {
    return <Loading />;
  }
  if (error) {
    return <Errorpage />;
  }
  if (data) {
    return (
      <>
      <Helmet>
      <title>Home</title>
      <meta name="description" content={"the largest store in saudi arabia"} />
    </Helmet>
      <Landing/>
      <Products {...{data,navigate,favoritProducts,dispatch,insertedProducts,QuantityFunc}}/>
      </>
    );
  }
}
