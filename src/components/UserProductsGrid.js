import React, { useState, useEffect } from 'react'
import styled from 'styled-components/macro'
import { Route, useHistory } from 'react-router-dom'
import { Sort } from './Sort'
import { ProductCard } from './ProductCard'
import { Pagination } from './Pagination'
import { Button } from './Button'

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
const EmptyWrapper = styled.div`
  display: grid;
  align-self: center;
  padding: 20px;
  width: 100%;
  max-width: 400px;
  box-sizing: border-box;
`
const EmptyState = styled.h2`
  font-size: 14px;
  text-align: center;
`

export const UserProductsGrid = () => {
  const history = useHistory()
  const [products, setProducts] = useState([])
  const [page, setPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)
  const [sort, setSort] = useState('newest')

  useEffect(() => {
    fetch(`http://localhost:8080/products?page=${page}&sort=${sort}&featured=true&featured=false&createdByAdmin=false`)
      .then((res) => res.json())
      .then((json) => {
        setProducts(json.products)
        setPage(json.page)
        setTotalPages(json.total_pages)
      })
  }, [page, sort])

  const toListing = () => {
    history.push('/sell')
  }

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
      <Grid>
        {products && (
          <>
            {products.map((product) => (
              <ProductCard
                key={product._id}
                _id={product._id}
                imageUrl={product.imageUrl}
                name={product.name}
                price={product.price}
                sold={product.sold}
                email={product.seller.email}
              />
            ))}
          </>
        )}
      </Grid>

      {!products &&
        <EmptyWrapper>
          <EmptyState>Our community has not listed any products for sale yet.</EmptyState>
          <EmptyState>Start selling your preloved items.</EmptyState>
          <Button
            onClick={toListing}
            title="List product"
            background="#1a1a1a"
            color="#fff"
          />
        </EmptyWrapper>
      }

      <Pagination
        page={page}
        totalPages={totalPages}
        back={previousPage}
        next={nextPage} />

    </FeaturedContainer>
  )
}
