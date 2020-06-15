import React from 'react'
import styled from 'styled-components/macro'
import { Link, Route } from 'react-router-dom'
import { Button } from './Button'
import { useDispatch } from 'react-redux'
import { cart } from '../reducers/cart'

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
  display: grid;
  grid-template-columns: 150px;
  justify-content: center;
  box-sizing: border-box;
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
        <Img src={imageUrl} />
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
