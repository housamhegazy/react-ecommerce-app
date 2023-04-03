// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const productsApi = createApi({
  reducerPath: 'productsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://fakestoreapi.com/' }),
  endpoints: (builder) => ({
    getProductsByName: builder.query({
      query: (name) => `products`,
    }),
  }),
})
export const productDetailsApi = createApi({
  reducerPath: 'productDetailsApiApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://fakestoreapi.com/' }),
  endpoints: (builder) => ({
    getproductDetailsApiByName: builder.query({
      query: (name) => `products/${name}`,
    }),
  }),
})
export const productCategoryApi = createApi({
  reducerPath: 'productCategoryApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://fakestoreapi.com/' }),
  endpoints: (builder) => ({
    getproductCategoryApiByName: builder.query({
      query: (name) => `products/categories`,
    }),
  }),
})
export const categoryApi = createApi({
  reducerPath: 'categoryApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://fakestoreapi.com/' }),
  endpoints: (builder) => ({
    getcategoryApiByName: builder.query({
      query: (name) => `products/category/${name}`,
    }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetProductsByNameQuery } = productsApi
export const { useGetproductDetailsApiByNameQuery } = productDetailsApi
export const { useGetproductCategoryApiByNameQuery } = productCategoryApi
export const { useGetcategoryApiByNameQuery } = categoryApi