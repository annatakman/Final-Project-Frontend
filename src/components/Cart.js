import React from 'react'
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'
import { cart } from '../reducers/cart'
//import { Modal } from "react-bootstrap";

const Title = styled.h1`
  color: blue;
  font-size: 12px;
`

export const Cart = () => {
  const dispatch = useDispatch()

  const cartItems = useSelector((state) => state.cart.items)
  const total = useSelector((state) => state.cart.totalPrice)

  return <Title>{cartItems.length === 0 && <h4>Cart </h4>}</Title>
}
