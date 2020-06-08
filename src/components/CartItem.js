import React from 'react'
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'
import { cart } from 'reducers/cart'
import { Button } from './Button'

//   const item = useSelector((state) =>
//     state.cart.items.find((e) => e._id === _id)

const Article = styled.section``

export const CartItem = ({ _id, name, price }) => {
  const dispatch = useDispatch()

  const removeItem = () => {
    dispatch(cart.actions.removeProduct({ _id }))
  }

  return (
    <Article key={_id}>
      <p>{name}</p>
      <p>{price} EUR</p>
      <button type="button" onClick={removeItem}>
        -
      </button>
    </Article>
  )
}
