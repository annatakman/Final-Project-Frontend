import React from 'react'
import styled from 'styled-components'
import { Link, useHistory } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { Button } from '../components/Button'
import { CartItem } from '../components/CartItem'
import { submitOrder } from '../reducers/cart'

const Cart = styled.div``

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

  const handleSubmit = () => {
    dispatch(submitOrder(items, userId, name, street, postcode, city, telephone, accessToken))
  }

  return (
    <div>
      {accessToken && (
        <>
          {cartItems.length > 0 && (
            <Cart>
              {cartItems.map((item) => (
                <CartItem _id={item._id} imageUrl={item.imageUrl} name={item.name} price={item.price} />
              ))}
              <h2>Ship to</h2>
              <p>{name}</p>
              <p>{street}</p>
              <p>{postcode}</p>
              <p>{city}</p>
              <p>{telephone}</p>
              <Button title="Submit order" onClick={handleSubmit} />
            </Cart>
          )}
        </>
      )}
      {!accessToken && (
        <>
          <Link to="/login">
            <Button title="Log in" />
          </Link>
          <Link to="/signup">
            <Button title="Sign up" />
          </Link>
        </>
      )}
    </div>
  )
} 
