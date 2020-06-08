import React from 'react'
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'
import { cart } from '../reducers/cart'
import { user } from '../reducers/user'
import { CartItem } from '../components/CartItem'
import { Button } from '../components/Button'
import { Link, useHistory } from 'react-router-dom'
//import { Modal } from "react-bootstrap";

const Title = styled.h1`
  color: blue;
  font-size: 12px;
`
const Cart = styled.section``

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

  /*   useEffect(() => {
    if (accessToken) {
      
    }
  }, [accessToken]) */

  return (
    <div>
      {cartItems.length > 0 && (
        <Cart>
          {cartItems.map((item) => (
            <CartItem _id={item._id} name={item.name} price={item.price} />
          ))}
          <Button title="Clear Cart" onClick={clearAll} />
          {accessToken && <Button title="To Checkout" onClick={toCheckout} />}
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
        </Cart>
      )}
    </div>
  )
}
