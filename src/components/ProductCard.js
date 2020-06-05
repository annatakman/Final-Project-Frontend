import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

const FeaturedContainer = styled.section`
  display: flex;
`
const Grid = styled.div`
  display: grid;
  grid-template-columns: 100%;
  margin: 20px;
  grid-row-gap: 20px;

  @media (min-width: 768px) {
    grid-template-columns: 32% 32% 32%;
    grid-column-gap: 2%;
    width: 100vw; 
  }
`
const Article = styled.article`
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

export const ProductCard = ({ _id, imageUrl, name, price }) => {
  return (
    <Article key={_id}>
      <Img src={imageUrl} />
      <Details>
        <p>{name}</p>
        <p>{price} EUR</p>
      </Details>
    </Article>
  )

}