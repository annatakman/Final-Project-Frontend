import React, { useState, useEffect } from 'react'
import styled from 'styled-components/macro'
import { Sort } from './Sort'
import { ProductCard } from './ProductCard'
import { Pagination } from './Pagination'

const FeaturedContainer = styled.section`
  display: flex;
  flex-direction: column;
`
const Grid = styled.div`
  display: grid;
  grid-template-columns: 100%;
  margin: 0 20px 20px 20px;
  grid-row-gap: 20px;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-column-gap: 2%;
  }
`

export const ProductsGrid = () => {
  const [products, setProducts] = useState([])
  const [page, setPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)
  const [sort, setSort] = useState('')

  useEffect(() => {
    fetch(`http://localhost:8080/products?page=${page}&sort=${sort}&featured=true;false`)
      .then((res) => res.json())
      .then((json) => {
        setProducts(json.products)
        setPage(json.page)
        setTotalPages(json.total_pages)
      })
  }, [page, sort])

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
      <Sort onChange={(e) => setSort(e.target.value)} />
      {products.length > 0 && (
        <Grid>
          {products.map((product) => (
            <ProductCard
              key={product._id}
              _id={product._id}
              imageUrl={product.imageUrl}
              name={product.name}
              price={product.price}
              sold={product.sold}
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
