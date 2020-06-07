import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { ProductCard } from './ProductCard'

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

export const ProductsGrid = () => {
  const PRODUCTS_URL = 'http://localhost:8080/products'
  const [products, setProducts] = useState([])

  useEffect(() => {
    fetch(PRODUCTS_URL)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data)
      })
  }, [PRODUCTS_URL])

  return (
    <FeaturedContainer>
      {products.length > 0 &&
        <Grid>
          {products.map((product) => (
            <Link to={`/products/${product._id}`}>
              <ProductCard
              _id={product._id}
              imageUrl={product.imageUrl}
              name={product.name}
              price={product.price}
            />
            </Link>
          ))}
        </Grid>
      }
    </FeaturedContainer>
  )
}