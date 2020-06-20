import React, { useState, useEffect } from 'react'
import styled from 'styled-components/macro'
import { useHistory } from 'react-router-dom'
// import { Sort } from './Sort'
import { ProductCard } from './ProductCard'
import { Pagination } from './Pagination'
import { Button } from '../lib/Button'
import { Radio } from '../lib/Radio'

const FeaturedContainer = styled.section`
  display: flex;
  flex-direction: column;
  margin: 0 20px 20px 20px;
`
const Grid = styled.div`
  display: grid;
  grid-template-columns: 100%;
  grid-row-gap: 20px;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-column-gap: 2%;
  }
`
const SortOptions = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  margin-bottom: 20px;
  border-top: 1px solid #1a1a1a;
  border-bottom: 1px solid #1a1a1a;
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

export const ProductsGrid = () => {
  const history = useHistory()
  const [products, setProducts] = useState([])
  const [page, setPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)
  const [sort, setSort] = useState('newest')

  useEffect(() => {
    fetch(`https://final-technigo-project.herokuapp.com/products?page=${page}&sort=${sort}&featured=false&featured=true&createdByAdmin=true`)
      .then((res) => res.json())
      .then((json) => {
        setProducts(json.products)
        setPage(json.page)
        setTotalPages(json.total_pages)
      })
  }, [page, sort])

  const toMarket = () => {
    history.push('/market')
  }

  const previousPage = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
    setPage(page - 1)
  }

  const nextPage = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
    setPage(page + 1)
  }

  return (
    <FeaturedContainer>
      {/* <Sort onChange={(e) => setSort(e.target.value)} /> */}
      <SortOptions>
        <Radio setState={setSort} state={sort} value="newest" text="New in" />
        <Radio setState={setSort} state={sort} value="high" text="€ high to low" />
        <Radio setState={setSort} state={sort} value="low" text="€ low to high" />
      </SortOptions>

      {products.length > 0 &&
        <>
          <Grid>
            {products.map((product) => (
              <ProductCard
                key={product._id}
                _id={product._id}
                imageUrl={product.imageUrl}
                name={product.name}
                price={product.price}
                sold={product.sold} />
            ))}
          </Grid>

          <Pagination
            page={page}
            totalPages={totalPages}
            back={previousPage}
            next={nextPage} />
        </>
      }


      {products.length === 0 &&
        <EmptyWrapper>
          <EmptyState>We have no products for sale at the moment.</EmptyState>
          <EmptyState>Go to the market page to see what our community has listed for sale.</EmptyState>
          <Button
            onClick={toMarket}
            title="To market"
            background="#1a1a1a"
            color="#fff" />
        </EmptyWrapper>
      }

    </FeaturedContainer >
  )
}
