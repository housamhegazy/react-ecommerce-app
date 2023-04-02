import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  insertedProducts: [],
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    addToCart: (state, action) => {
    //   state.insertedProducts = state.insertedProducts.push(action.payload)
      console.log(state.insertedProducts)
    },
  },
})

// Action creators are generated for each case reducer function
export const { addToCart } = counterSlice.actions

export default counterSlice.reducer