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
    padding: 20px;
`

const Cart = styled.section``

const ButtonWrapper = styled.div`
display: grid;
grid-template-columns: 1fr;

@media (min-width: 1025px) {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: 20px;
  margin-top: 30px;
}
`

const Text = styled.p``

export const CartPage = () => {
  const dispatch = useDispatch()
  const history = useHistory()
  const accessToken = useSelector((store) => store.user.login.accessToken)
  const cartItems = useSelector((store) => store.cart.items)
  const clearAll = () => {
    dispatch(cart.actions.clearCart())
  }

  const toCheckout = () => {
    history.push('/checkout')
  }

  const toLogin = () => {
    history.push('/login')
  }

  const toSignup = () => {
    history.push('/signup')
  }

  return (
    <CartWrapper>
      {cartItems.length > 0 && (
        <Cart>
          {cartItems.map((item) => (
            <CartItem _id={item._id} name={item.name} price={item.price} />
          ))}
          <ButtonWrapper>
            {accessToken && <Button title="To checkout" onClick={toCheckout} background="#1a1a1a" color="#fff" />}
            {!accessToken && (
              <>
                <Button title="Log in" onClick={toLogin} background="#d3d3d3" />
                <Button title="Sign up" onClick={toSignup} background="#1a1a1a" color="#fff" />
              </>
            )}
            <Button title="Clear Cart" onClick={clearAll} />
          </ButtonWrapper>
        </Cart>
      )}
      {cartItems.length === 0 && (
        <Text>Hi! Your cart is empty!</Text>
      )}
    </CartWrapper>
  )
}
