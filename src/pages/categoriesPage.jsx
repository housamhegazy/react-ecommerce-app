import React from "react";
import { useGetcategoryApiByNameQuery } from "../Redux/productsApi";
import { useNavigate, useParams } from "react-router-dom";
import Errorpage from "./Errorpage";
import Loading from "./LoadingPage";
import { useSelector, useDispatch } from "react-redux";
import Products from "components/Products";
import { Helmet } from "react-helmet-async";

export default function CategoriesPage() {
  const param = useParams();
  const { data, error, isLoading } = useGetcategoryApiByNameQuery(param.name);

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
          <title>product details</title>
          <meta name="product details" content={data.description} />
        </Helmet>
        <Products
          {...{
            data,
            navigate,
            favoritProducts,
            dispatch,
            insertedProducts,
            QuantityFunc,
          }}
        />
      </>
    );
  }
}
