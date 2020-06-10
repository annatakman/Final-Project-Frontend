import React from 'react'
import styled from 'styled-components'
import { Link, useHistory } from 'react-router-dom'
import { Button } from './Button'
import { useDispatch } from 'react-redux'
import { cart } from '../reducers/cart'
import { products } from 'reducers/products'

const Article = styled.article`
  position: relative;
  width: 100%;
  background: #fff;
`
const Img = styled.img`
  width: 100%;
`
const Details = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5px 0px;
  font-size: 14px;
  font-weight: bold;
  p {
    text-transform: uppercase;
    margin: 0;
  }
`
const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  transition: 0.5s ease;
  opacity: 0;
  position: absolute;
  top: 75%;
  left: 50%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);

  ${Article}:hover & {
    opacity: 1;
  }
`

export const ProductCard = ({ _id, imageUrl, name, price }) => {
  const dispatch = useDispatch()
  const history = useHistory()

  const handleAddToCart = () => {
    dispatch(cart.actions.addProduct({ _id, imageUrl, name, quantity: 1, price }))
  }

  return (
    <Article key={_id}>
      <Link to={`/products/${_id}`}>
        <Img src={imageUrl} />
        <Details>
          <p>{name}</p>
          <p>{price} EUR</p>
        </Details>
      </Link>
      <ButtonWrapper>
        <Button onClick={handleAddToCart} title="Add to cart"></Button>
      </ButtonWrapper>
    </Article>
  )
}
