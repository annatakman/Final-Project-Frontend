import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { ProductCard } from './ProductCard'
import { Pagination } from './Pagination'

const FeaturedContainer = styled.section`
  display: flex;
  flex-direction: column;
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
  const [products, setProducts] = useState([])
  const [page, setPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)

  useEffect(() => {
    fetch(`http://localhost:8080/products?page=${page}`)
      .then((res) => res.json())
      .then((json) => {
        setProducts(json.products)
        setPage(json.page)
        setTotalPages(json.total_pages)
      })
  }, [page])

  const previousPage = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
    setPage(page - 1)
  }

  const nextPage = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
    setPage(page + 1)
  }

  return (
    <FeaturedContainer>
      {products.length > 0 && (
        <Grid>
          {products.map((product) => (
            <ProductCard
              _id={product._id}
              imageUrl={product.imageUrl}
              name={product.name}
              price={product.price}
            />
          ))}
        </Grid>
      )}
      <Pagination
        page={page}
        totalPages={totalPages}
        back={previousPage}
        next={nextPage} />
    </FeaturedContainer>
  )
}
