import React from 'react'
import styled from 'styled-components/macro'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { Button } from '../components/Button'
import { ProfileProductCard } from './ProfileProductCard'

const UserProducts = styled.div``
const ProductsTitle = styled.h3`
  font-size: 18px;
  text-transform: uppercase;
`
const ProductsWrapper = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-row-gap: 15px;
  grid-column-gap: 15px;
  width: 100%;
  max-width: 400px;
  
  /* @media (min-width: 1025px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  } */
`
const Text = styled.p`
  margin-top: 7px;
  margin-bottom: 7px;
  font-size: 12px;
  font-weight: 700;
  text-align: center;
`

export const UserProfileProducts = () => {
  const history = useHistory()
  const products = useSelector((store) => store.user.login.products)

  const toListing = () => {
    history.push('/sell')
  }

  return (
    <UserProducts>
      <ProductsTitle>Your listed items ({products.length}):</ProductsTitle>
      {products.length > 0 && (
        <ProductsWrapper>
          {products.map((product) => (
            <ProfileProductCard
              key={product._id}
              productId={product._id}
              product={product}
            />
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
    </UserProducts>
  )
}
