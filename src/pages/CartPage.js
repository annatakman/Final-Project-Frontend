import React from 'react'
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'
import { cart } from '../reducers/cart'
import { user } from '../reducers/user'
import { CartItem } from '../components/CartItem'
import { Button } from '../components/Button'
import { useHistory } from 'react-router-dom'
//import { Modal } from "react-bootstrap";

const CartWrapper = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
`
const Cart = styled.section`
  display: grid;
  
  @media (min-width: 1025px) {
    width: 60vw;
  }
`
const OrderTotal = styled.p`
  margin-top: 50px;
  text-align: center;
`
const ButtonWrapper = styled.div`
  display: grid;
  grid-template-columns: 100%;
  width: 100%;

@media (min-width: 1025px) {
  display: grid;
  grid-template-columns: 1fr 1fr /* 1fr */;
  grid-column-gap: 20px;
  margin: auto;
  margin-top: 30px;
  width: 40vw;
}
`
const Text = styled.p``

export const CartPage = () => {
  const dispatch = useDispatch()
  const history = useHistory()
  const accessToken = useSelector((store) => store.user.login.accessToken)
  const cartItems = useSelector((store) => store.cart.items)
  const totalProducts = cartItems.length
  const totalPrice = cartItems.reduce((total, item) => total + item.price, 0)

  const clearAll = () => {
    dispatch(cart.actions.clearCart())
  }

  const toCheckout = () => {
    history.push('/checkout')
  }

  const toLogin = () => {
    history.push('/login')
  }

  /*  const toSignup = () => {
     history.push('/signup')
   } */

  const toProducts = () => {
    history.push('/products')
  }

  return (
    <CartWrapper>
      {cartItems.length > 0 && (
        <>
          <Cart>
            {cartItems.map((item) => (
              <CartItem _id={item._id} imageUrl={item.imageUrl} name={item.name} price={item.price} />
            ))}
            <OrderTotal>Total products: {totalProducts} | Order total: {totalPrice} €</OrderTotal>
          </Cart>
          <ButtonWrapper>
            {accessToken && <Button title="To checkout" onClick={toCheckout} background="#1a1a1a" color="#fff" />}
            {!accessToken && <Button title="Log in" onClick={toLogin} background="#1a1a1a" color="#fff" />
            /* (
              <>
              <Button title="Log in" onClick={toLogin} background="#d3d3d3" />
              <Button title="Sign up" onClick={toSignup} background="#1a1a1a" color="#fff" />
            </>
            ) */}
            <Button title="Clear Cart" onClick={clearAll} />
          </ButtonWrapper>
        </>
      )}
      {cartItems.length === 0 && (
        <>
          <Text>Hi! Your cart is empty!</Text>
          <Button title="All products" onClick={toProducts} />
        </>
      )}
    </CartWrapper>
  )
}
