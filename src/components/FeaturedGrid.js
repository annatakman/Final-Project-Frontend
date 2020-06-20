import React, { useState, useEffect } from 'react'
import styled from 'styled-components/macro'
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
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-column-gap: 2%;
  }
`

export const FeatureGrid = () => {
  const PRODUCTS_URL = `https://final-technigo-project.herokuapp.com/products?featured=true&createdByAdmin=true`
  const [products, setProducts] = useState([])

  useEffect(() => {
    fetch(PRODUCTS_URL)
      .then((res) => res.json())
      .then((json) => {
        if (json.products) {
          setProducts(json.products)
        }
      })
  }, [PRODUCTS_URL])

  const filteredProducts = products.filter(
    (product) => product.featured === true
  )

  return (
    <FeaturedContainer>
      {products.length > 0 && (
        <Grid>
          {filteredProducts.map((product) => (
            <ProductCard
              key={product._id}
              _id={product._id}
              imageUrl={product.imageUrl}
              name={product.name}
              price={product.price}
              sold={product.sold} />
          ))}
        </Grid>
      )}
    </FeaturedContainer>
  )
}
