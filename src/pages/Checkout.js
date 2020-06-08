import React from 'react'
import styled from 'styled-components'
import { Link, useHistory } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { Button } from '../components/Button'
import { CartItem } from '../components/CartItem'

const Cart = styled.div``

export const Checkout = () => {
  const history = useHistory()
  const accessToken = useSelector((store) => store.user.login.accessToken)
  const cartItems = useSelector((store) => store.cart.items)
  const user = useSelector((store) => store.user.login)

  // Backend förväntar sig följande i en body till /orders:
  /* items,
  userId,
  name,
  street,
  postcode,
  city,
  telephone */

  return (
    <div>
      {accessToken && (
        <>
          {cartItems.length > 0 && (
            <Cart>
              {cartItems.map((item) => (
                <CartItem _id={item._id} name={item.name} price={item.price} />
              ))}
              <h2>Ship to</h2>
              <p>{user.name}</p>
              <p>{user.street}</p>
              <p>{user.postcode}</p>
              <p>{user.city}</p>
              <p>{user.telephone}</p>
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
