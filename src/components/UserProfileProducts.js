import React, { useState } from 'react'
import styled from 'styled-components/macro'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory, Route } from 'react-router-dom'
import { Button } from '../components/Button'

const ProductsTitle = styled.h2`
  font-size: 18px;
`
const ProductsWrapper = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-row-gap: 15px;
  grid-column-gap: 15px;
  
  @media (min-width: 1025px) {
    width: 60vw;
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
`
const Product = styled.div`
  display: grid;
  width: 150px;
  padding: 5px;
  border: 1px solid #d3d3d3;
  background: #fff;
`
const Img = styled.img`
  height: 150px;
  width: 150px;
  object-fit: cover;
  object-position: 0 30%;
`
const Text = styled.p`
  margin-top: 15px;
  margin-bottom: 0;
  font-size: 12px;
  font-weight: 700;
  text-align: center;
`
const TextSmall = styled(Text)`
  font-size: 8px;
  margin-top: 5px;
`

export const UserProfileProducts = () => {
  const history = useHistory()
  const products = useSelector((store) => store.user.login.products)
  console.log(products)
  const toListing = () => {
    history.push('/sell')
  }

  return (
    <>
      <ProductsTitle>My listed items ({products.length})</ProductsTitle>
      {products.length > 0 && (
        <ProductsWrapper>
          {products.map((product) => (
            <Product key={product._id}>
              <Img src={product.imageUrl} />
              <Text>{product.name}</Text>
              <TextSmall>ID: {product._id}</TextSmall>
              <Button
                title={product.sold ? 'Re-list' : 'Mark as sold'}
                background="#1a1a1a"
                color="#fff"
              />
            </Product>
          ))}
        </ProductsWrapper>
      )}
      {products.length === 0 && (
        <>
          <Text>You have not listed any items yet.</Text>
          <Button
            onClick={toListing}
            title="List product"
            background="#1a1a1a"
            color="#fff"
          />
        </>
      )}
    </>
  )
}
