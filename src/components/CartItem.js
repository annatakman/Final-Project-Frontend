import React from 'react'
import styled from 'styled-components/macro'
import { useDispatch } from 'react-redux'
import { cart } from 'reducers/cart'
import { Button } from '../lib/Button'

const Article = styled.section`
  display: grid;
  grid-template-columns: 1fr 1.5fr 1fr 0.5fr;
  grid-column-gap: 10px;
  align-items: center;
  margin-bottom: 15px;

  @media (min-width: 768px) {
    width: 60vw;
  } 
`
const Image = styled.img`
  height: 80px;
  width: 80px;
  object-fit: cover;
  object-position: 0 30%;
`
const Text = styled.p`
  margin-bottom: 0;
`

export const CartItem = ({ _id, imageUrl, name, price }) => {
  const dispatch = useDispatch()

  const removeItem = () => {
    dispatch(cart.actions.removeProduct({ _id }))
  }

  return (
    <Article>
      <Image src={imageUrl} />
      <Text>{name}</Text>
      <Text>{price} €</Text>
      <Button type="button" onClick={removeItem} title="Remove" />
    </Article>
  )
}
