import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components/macro'
import { useHistory } from 'react-router-dom'
import { Button } from '../lib/Button'

const OrdersWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
const OrdersTitle = styled.h3`
  margin-top: 40px;
  font-size: 18px;
  text-transform: uppercase;
`

const Text = styled.p`
  margin-top: 7px;
  margin-bottom: 7px;
  font-size: 12px;
  font-weight: 700;
  text-align: center;
`

const Details = styled.p`
  font-size: 14px;
`

export const Orders = () => {
  const history = useHistory()
  const orders = useSelector((store) => store.user.login.orders)

  const toProducts = () => {
    history.push('/products')
  }
  return (
    <>
      <OrdersTitle>Your order history ({orders.length}): </OrdersTitle>
      {orders.length > 0 && (
        <OrdersWrapper>
          {orders.map((order) => (
            <div key={order._id}>
              <Details>Order number: {order._id}</Details>
              <Details> Status: {order.status}</Details>
            </div>
          ))}
        </OrdersWrapper>
      )}
      {orders.length === 0 && (
        <>
          <Text>You do not have any orders yet.</Text>
          <Button
            onClick={toProducts}
            title="All products"
            background="#1a1a1a"
            color="#fff"
          />
        </>
      )}
    </>
  )
}
