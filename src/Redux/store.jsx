import { configureStore } from "@reduxjs/toolkit";
// Or from '@reduxjs/toolkit/query/react'
import { setupListeners } from "@reduxjs/toolkit/query";
import {
  categoryApi,
  productCategoryApi,
  productDetailsApi,
  productsApi,
} from "./productsApi";
import counterReducer from "./productsSlice";
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    // Add the generated reducer as a specific top-level slice
    [productsApi.reducerPath]: productsApi.reducer,
    [productDetailsApi.reducerPath]: productDetailsApi.reducer,
    [productCategoryApi.reducerPath]: productCategoryApi.reducer,
    [categoryApi.reducerPath]: categoryApi.reducer,
  },
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(productsApi.middleware)
      .concat(productDetailsApi.middleware)
      .concat(productCategoryApi.middleware)
      .concat(categoryApi.middleware)
});

// optional, but required for refetchOnFocus/refetchOnReconnect behaviors
// see `setupListeners` docs - takes an optional callback as the 2nd arg for customization
setupListeners(store.dispatch);
