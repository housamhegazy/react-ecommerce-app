
import { useNavigate } from "react-router-dom";
import { useGetProductsByNameQuery } from "../Redux/productsApi";

import { useSelector, useDispatch } from "react-redux";
import Loading from "./LoadingPage";
import Errorpage from "./Errorpage";
import Products from "components/Products";
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
      <Products {...{data,navigate,favoritProducts,dispatch,insertedProducts,QuantityFunc}}/>
    );
  }
}
