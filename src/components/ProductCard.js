import React from 'react'
import styled from 'styled-components'
import { Button } from './Button'

const Article = styled.article`
  position: relative;
  width: 100%;
  background: #d8dadc;
`
const Img = styled.img`
  width: 100%;
`
const Details = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 20px;
`
const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  transition: .5s ease;
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
  return (
    <Article key={_id}>
      <Img src={imageUrl} />
      <Details>
        <p>{name}</p>
        <p>{price} EUR</p>
      </Details>
      <ButtonWrapper>
        <Button title='Add to cart' />
      </ButtonWrapper>
    </Article>
  )
}