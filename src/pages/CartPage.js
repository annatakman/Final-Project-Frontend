import React, { useState } from 'react'
import styled from 'styled-components/macro'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory, Route } from 'react-router-dom'
import { cart, submitOrder } from '../reducers/cart'
import { CartItem } from '../components/CartItem'
import { Button } from '../lib/Button'
import { ShippingInfo } from '../components/ShippingInfo'

const CartWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`
const Cart = styled.section`
  display: grid;
  
  @media (min-width: 1025px) {
    display: flex;
    flex-direction: column;
    align-items: center;
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
  margin: 30px auto;
  width: 40vw;
}
`
const Text = styled.p`
  margin-top: 50px;
  font-weight: 700;
  text-align: center;
  text-transform: uppercase;
`

export const CartPage = () => {
  const dispatch = useDispatch()
  const history = useHistory()
  const accessToken = useSelector((store) => store.user.login.accessToken)
  const userId = useSelector((store) => store.user.login.userId)
  const cartItems = useSelector((store) => store.cart.items)
  const [name, setName] = useState(useSelector((store) => store.user.login.name))
  const [street, setStreet] = useState(useSelector((store) => store.user.login.street))
  const [postcode, setPostcode] = useState(useSelector((store) => store.user.login.postcode))
  const [city, setCity] = useState(useSelector((store) => store.user.login.city))
  const [telephone, setTelephone] = useState(useSelector((store) => store.user.login.telephone))
  const items = cartItems.map((item) => item._id)
  const totalProducts = cartItems.length
  const totalPrice = cartItems.reduce((total, item) => total + item.price, 0)

  const clearAll = () => dispatch(cart.actions.clearCart())
  const toCheckout = () => history.push('/checkout')
  const toLogin = () => history.push('/login')
  const toProducts = () => history.push('/products')
  const handleSubmit = () => {
    dispatch(submitOrder(items, userId, name, street, postcode, city, telephone, accessToken))
    history.push('/confirmation')
  }

  /*  const toSignup = () => {
     history.push('/signup')
   } */


  return (
    <CartWrapper>
      {cartItems.length > 0 && (
        <>
          <Cart>
            {cartItems.map((item) => (
              <CartItem key={item._id} imageUrl={item.imageUrl} name={item.name} price={item.price} />
            ))}

            <OrderTotal>Total products: {totalProducts} | Order total: {totalPrice} €</OrderTotal>

            <Route path="/checkout" exact>
              <Text>Ship to</Text>
              <ShippingInfo
                name={name}
                setName={setName}
                street={street}
                setStreet={setStreet}
                postcode={postcode}
                setPostcode={setPostcode}
                city={city}
                setCity={setCity}
                telephone={telephone}
                setTelephone={setTelephone} />
            </Route>
          </Cart>

          <ButtonWrapper>
            {accessToken &&
              <>
                <Route path="/cart" exact>
                  <Button title="To checkout" onClick={toCheckout} background="#1a1a1a" color="#fff" />
                </Route>
                <Route path="/checkout" exact>
                  <Button title="Submit order" onClick={handleSubmit} background="#1a1a1a" color="#fff" />
                </Route>
              </>
            }

            {!accessToken && <Button title="Log in" onClick={toLogin} background="#1a1a1a" color="#fff" />
            /* (
              <>
              <Button title="Log in" onClick={toLogin} background="#d3d3d3" />
              <Button title="Sign up" onClick={toSignup} background="#1a1a1a" color="#fff" />
            </>
            ) */}

            <Button title="Clear cart" onClick={clearAll} />
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
