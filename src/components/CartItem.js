import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { cart } from 'reducers/cart'

export const CartItem = ({ _id }) => {
  const dispatch = useDispatch()

  const item = useSelector((state) =>
    state.cart.items.find((e) => e._id === _id)
  )
}
