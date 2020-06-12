import React, { useState } from 'react'
import styled from 'styled-components'
import { useHistory, Route } from 'react-router-dom'
import { Button } from '../components/Button'
import { useSelector } from 'react-redux'

const ConfirmationWrapper = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
`
const Confirmation = styled.section`
  display: grid;
  grid-template-columns: 100%;
  
  @media (min-width: 1025px) {
    width: 40vw;
  }
`
const ConfirmationTitle = styled.h2`
  font-size: 30px;
  text-align: center;
`
const ConfirmationMessage = styled.p`
  font-size: 14px;
`
const ButtonWrapper = styled.div`
  display: grid;
  grid-template-columns: 100%;
  width: 100%;

@media (min-width: 1025px) {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 20px;
  margin: 30px auto;
  width: 40vw;
}
`

export const OrderConfirmation = () => {
  const history = useHistory()
  const toProfile = () => history.push('/profilepage')
  const toHome = () => history.push('/')
  const orderId = useSelector((store) => store.cart.orderId)

  return (
    <ConfirmationWrapper>
      <Confirmation>
        <ConfirmationTitle>Thank you!</ConfirmationTitle>
        <ConfirmationMessage>
          Your order will be processed and shipped when payment has been received. Please follow the payment instructions in your confirmation email.
        </ConfirmationMessage>
        <ConfirmationMessage>
          Once your package has been shipped, we will send you an email with tracking details.
        </ConfirmationMessage>
        <ButtonWrapper>
          <Button title="Check order status" onClick={toProfile} />
          <Button title="Back to homepage" onClick={toHome} />
        </ButtonWrapper>
      </Confirmation>
    </ConfirmationWrapper>
  )
}
