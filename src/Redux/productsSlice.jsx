import { createSlice } from "@reduxjs/toolkit";
import { productsApi } from "./productsApi";

const initialState = {
  insertedProducts: [],
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const productsWithQuantity = { ...action.payload, Quantity: 1 };
      state.insertedProducts.push(productsWithQuantity);
    },
    increaseProducts: (state, action) => {
      const elementToIncrease = state.insertedProducts.find((product) => {
        return product.id === action.payload.id;
      });
      elementToIncrease.Quantity++;
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
        state.insertedProducts = filteredproducts
      }
    },
    deleteProducts: (state, action) => {
      const elementtoDelete = state.insertedProducts.find((product) => {
        return product.id === action.payload.id;
      });
        const filteredproducts = state.insertedProducts.filter((product) => {
          return product.id !== elementtoDelete.id;
        });
        state.insertedProducts = filteredproducts
      
    },
  },
});

// Action creators are generated for each case reducer function
export const { addToCart, increaseProducts, decreaseProducts,deleteProducts } =
  counterSlice.actions;

export default counterSlice.reducer;
