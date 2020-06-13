import React from 'react'
import styled from 'styled-components/macro'
import { Link, useHistory } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { Button } from '../components/Button'
import { CartItem } from '../components/CartItem'
import { submitOrder } from '../reducers/cart'

const CheckoutWrapper = styled.section`
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

export const Checkout = () => {
  const history = useHistory()
  const dispatch = useDispatch()
  const userId = useSelector((store) => store.user.login.userId)
  const cartItems = useSelector((store) => store.cart.items)
  const name = useSelector((store) => store.user.login.name)
  const street = useSelector((store) => store.user.login.street)
  const postcode = useSelector((store) => store.user.login.postcode)
  const city = useSelector((store) => store.user.login.city)
  const telephone = useSelector((store) => store.user.login.telephone)
  const items = cartItems.map((item) => item._id)
  const accessToken = useSelector((store) => store.user.login.accessToken)
  const totalProducts = cartItems.length
  const totalPrice = cartItems.reduce((total, item) => total + item.price, 0)


  const handleSubmit = () => {
    dispatch(submitOrder(items, userId, name, street, postcode, city, telephone, accessToken))
  }

  const toProducts = () => {
    history.push('/products')
  }

  return (
    <CheckoutWrapper>
      {accessToken && (
        <>
          {cartItems.length > 0 && (
            <Cart>
              {cartItems.map((item) => (
                <CartItem _id={item._id} imageUrl={item.imageUrl} name={item.name} price={item.price} />
              ))}
              <OrderTotal>Total products: {totalProducts} | Order total: {totalPrice} €</OrderTotal>
              <h2>Ship to</h2>
              <p>{name}</p>
              <p>{street}</p>
              <p>{postcode}</p>
              <p>{city}</p>
              <p>{telephone}</p>
              <ButtonWrapper>
                <Button title="Submit order" onClick={handleSubmit} background="#1a1a1a" color="#fff" />
                <Button title="Clear cart" onClick={handleSubmit} />
              </ButtonWrapper>
            </Cart>
          )}
          {cartItems.length === 0 && (
            <>
              <Text>Hi! Your cart is empty!</Text>
              <Button title="All products" onClick={toProducts} />
            </>
          )}
        </>
      )}
      {!accessToken && (
        <>
          <Text>Oops! Look's like you're not logged in. Log in to access checkout</Text>
          <ButtonWrapper>
            <Link to="/login">
              <Button title="Log in" />
            </Link>
            <Link to="/signup">
              <Button title="Sign up" />
            </Link>
          </ButtonWrapper>
        </>
      )}
    </CheckoutWrapper>
  )
} 
