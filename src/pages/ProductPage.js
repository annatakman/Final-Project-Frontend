import React from 'react'
import styled from 'styled-components/macro'
import { ProductsGrid } from 'components/ProductsGrid'

const Container = styled.div``

export const ProductPage = () => {
  return (
    <Container>
      <ProductsGrid />
    </Container>
  )
}