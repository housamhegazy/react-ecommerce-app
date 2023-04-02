import { createSlice } from "@reduxjs/toolkit";
import { json } from "react-router-dom";
import { productsApi } from "./productsApi";

const initialState = {
  insertedProducts: JSON.parse(localStorage.getItem("cart")) || [],
  favoritProducts: JSON.parse(localStorage.getItem("favorite")) || [],
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const productsWithQuantity = { ...action.payload, Quantity: 1 };
      state.insertedProducts.push(productsWithQuantity);
      localStorage.setItem("cart", JSON.stringify(state.insertedProducts));
    },
    increaseProducts: (state, action) => {
      const elementToIncrease = state.insertedProducts.find((product) => {
        return product.id === action.payload.id;
      });
      elementToIncrease.Quantity++;
      localStorage.setItem("cart", JSON.stringify(state.insertedProducts));
    },
    decreaseProducts: (state, action) => {
      const elementToDecrease = state.insertedProducts.find((product) => {
        return product.id === action.payload.id;
      });
      elementToDecrease.Quantity--;
      if (elementToDecrease.Quantity === 0) {
        const filteredproducts = state.insertedProducts.filter((product) => {
          return product.id !== elementToDecrease.id;
        });
        state.insertedProducts = filteredproducts;
      }
      localStorage.setItem("cart", JSON.stringify(state.insertedProducts));
    },
    deleteProducts: (state, action) => {
      const elementtoDelete = state.insertedProducts.find((product) => {
        return product.id === action.payload.id;
      });
      const filteredproducts = state.insertedProducts.filter((product) => {
        return product.id !== elementtoDelete.id;
      });
      state.insertedProducts = filteredproducts;
      localStorage.setItem("cart", JSON.stringify(state.insertedProducts));
    },
    // favorite functions
    addtofavorite: (state, action) => {
      const addtofavorite = { ...action.payload, favorite: true };
      state.favoritProducts.push(addtofavorite);
      localStorage.setItem("favorite", JSON.stringify(state.favoritProducts));
    },
    removefavorite: (state, action) => {
      const array = state.favoritProducts.filter((item) => {
        return item.id !== action.payload.id;
      });
      state.favoritProducts = array
      localStorage.setItem("favorite", JSON.stringify(state.favoritProducts));
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  addToCart,
  increaseProducts,
  decreaseProducts,
  deleteProducts,
  addtofavorite,
  removefavorite,
} = counterSlice.actions;

export default counterSlice.reducer;
