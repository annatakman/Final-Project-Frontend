import { createSlice } from '@reduxjs/toolkit'

export const products = createSlice({
  name: 'products',
  initialState: [],
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload
    },
    /* return: () => {
      return initialState
    } */
  }
})

//Thunk to fetch products from our API
export const fetchProducts = () => {
  const PRODUCTS_URL = 'http://localhost:8080/products'
  return (dispatch) => {
    fetch(PRODUCTS_URL)
      .then((res) => res.json())
      .then((json) => {
        dispatch(products.actions.setProducts(json))
      })
  }
}