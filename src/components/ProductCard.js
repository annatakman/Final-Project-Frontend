import React from 'react'
import styled from 'styled-components/macro'
import { Link, Route } from 'react-router-dom'
import { Button } from '../lib/Button'
import { useDispatch } from 'react-redux'
import { cart } from '../reducers/cart'

const Article = styled.article`
  position: relative;
  width: 100%;
  height: 100%;
  background: #fff;
`
const Img = styled.img`
  width: 100%;

  @media (min-width: 768px) {
    height: 520px;
    object-fit: cover;
    object-position: 50% 50%;
  }

  @media (min-width: 1025px) {
    height: 420px;
  }
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
  position: absolute;
  top: 75%;
  left: 50%;
  display: grid;
  grid-template-columns: 180px;
  justify-content: center;
  box-sizing: border-box;
  opacity: 0;
  
  transition: 0.5s ease;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);

  ${Article}:hover & {
    opacity: 1;
  }

  Button {
    width: 100%;
  }
`

export const ProductCard = ({ _id, imageUrl, name, price, sold, email }) => {
  const dispatch = useDispatch()

  const handleAddToCart = () => {
    dispatch(cart.actions.addProduct({ _id, imageUrl, name, quantity: 1, price }))
  }

  const handleMailTo = () => {
    window.location.assign(`mailto:${email}?subject=Product: ${name} ${_id}`)
  }

  return (
    <Article key={_id}>
      <Link to={`/products/${_id}`}>
        <Img src={imageUrl} alt={name} />
        <Details>
          <p>{name}</p>
          <p>{price} €</p>
        </Details>
      </Link>
      <ButtonWrapper>
        {!sold &&
          <>
            <Route path="/" exact>
              <Button onClick={handleAddToCart} title="Add to cart" />
            </Route>
            <Route path="/products" exact>
              <Button onClick={handleAddToCart} title="Add to cart" />
            </Route>
            <Route path="/market" exact>
              <Button onClick={handleMailTo} title="Contact seller" />
            </Route>
          </>
        }
        {sold && <Button title="Sold" border="#d3d3d3" color="#d3d3d3" disabled />}
      </ButtonWrapper>
    </Article>
  )
}
