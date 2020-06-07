import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import styled from 'styled-components'
import { Button } from 'components/Button'

const DetailPage = styled.section``

const Article = styled.article`
  position: relative;
  width: 70vh;
  background: #d8dadc;
`
const Image = styled.img`
width: 100%;
`

const Details = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 20px;
`
const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  transition: .5s ease;
  opacity: 0;
  position: absolute;
  top: 75%;
  left: 50%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);

  ${Article}:hover & {
    opacity: 1;
  }
`

export const ProductDetails = () => {
  const { productId } = useParams()
  const [product, setProduct] = useState({})
  const PRODUCT_URL = `http://localhost:8080/products/${productId}`

  useEffect(() => {
    fetch(PRODUCT_URL)
      .then(res => res.json())
      .then((data) => {
        setProduct(data)
      })
  }, [productId])

  return (
    <DetailPage>
      <Article>
      <Image src={product.imageUrl} alt={product.name}></Image>
      <Details>
      <h4>{product.description}</h4>
      <p>Size: {product.size}</p>
      <p>Price: {product.price} EUR</p>
      </Details> 
      <ButtonWrapper>
        <Button title='Add to cart' />
      </ButtonWrapper>
      </Article>
      <Link to='/products'>
        <Button title='Back to all products' />
      </Link>
    </DetailPage>
  )
}

