import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  items: []
}

export const cart = createSlice({
  name: 'cart',
  initialState: initialState,
  reducers: {
    addProduct: (state, action) => {
      console.log(action)
      const existingProduct = state.items.find(
        (item) => item._id === action.payload._id
      )

      if (existingProduct) {
        existingProduct.quantity += 0
      } else {
        state.items.push({ ...action.payload, quantity: 1 })
      }
    },
    removeProduct: (state, action) => {
      const existingProduct = state.items.find(
        (item) => item._id === action.payload._id
      )

      if (existingProduct && existingProduct.quantity === 1) {
        state.items = state.items.filter(
          (item) => item._id !== action.payload._id
        )
      }
    },
    clearCart: () => {
      return initialState
    }
  }
})

export const submitOrder = (
  items,
  userId,
  name,
  street,
  postcode,
  city,
  telephone,
  accessToken
) => {
  const SUBMIT_ORDER_URL = 'https://final-technigo-project.herokuapp.com/orders'
  return (dispatch) => {
    fetch(SUBMIT_ORDER_URL, {
      method: 'POST',
      body: JSON.stringify({
        items,
        userId,
        name,
        street,
        postcode,
        city,
        telephone
      }),
      headers: {
        'Content-Type': 'application/json',
        Authorization: accessToken
      }
    })
      .then(() => {
        dispatch(cart.actions.clearCart())
      })
  }
}